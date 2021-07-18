
import { HasEmail, HasPhoneNumber, } from "./basics";

/* Class Contact implements the interface HasEmail */
export class Contact implements HasEmail {
   name: string;
   email: string;
   constructor(_name: string, _email: string) {
      this.name = _name;
      this.email = _email;
   }
}

/* Access modifiers
public - for all
protected - for this class and all subclasses
private - for only this class
*/

export class Contact1 implements HasEmail {
   protected age: number = 0; /* protected, initialised */
   constructor(
      public name: string,
      public email: string = 'no email' /* You can set a default value as well */
   ) {
      // needs nothings more
   }
}
// makineg email protected will create error as email is not exposed
const x = new Contact1('x', 'y');

/* Implementing two or more interfaces */
class OtherContact implements HasEmail, HasPhoneNumber {
   private passwordVal!: string;
   constructor(
      public name: string,
      public email: string,
      public phone: number
   ) { }
   async init() {
      this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
   }
   // OR you can have lazy initialization
   get password(): string { // get is a readonly property of obj made from OtherContact
      if (!this.passwordVal) {
         this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
      }
      return this.passwordVal;
   }
}

/* Abstract classes 
You can not have instances of Abstract classes but you can create more subclasses 
using them and access them in the name of AbstractClassses

All the properties that you definitely want to be reimplemented must be given 
the keyword abstract after the specifier (like virtual void 0 in C++ ? )
*/
abstract class AbstractContact implements HasEmail, HasPhoneNumber {
   public abstract phone: number; // must be implemented by the non-abstract subclass

   constructor(
      public name: string, // both of these should be public to satisfy HasEmail
      public email: string
   ) { }

   abstract sendEmail(): void; // must be implemented by non-abstract subclass
}

/* NOTE: interfaces are "implements"ed  and abstract classes are "extends"ed */
class ConcreteClass extends AbstractContact {
   constructor(
      public phone: number, // needed
      name: string,
      email: string
   ) {
      super(name, email)
   }
   sendEmail() { //needed 
      // do something
   }
}

