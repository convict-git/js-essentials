"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact1 = exports.Contact = void 0;
/* Class Contact implements the interface HasEmail */
class Contact {
    constructor(_name, _email) {
        this.name = _name;
        this.email = _email;
    }
}
exports.Contact = Contact;
/* Access modifiers
public - for all
protected - for this class and all subclasses
private - for only this class
*/
class Contact1 {
    constructor(name, email = 'no email' /* You can set a default value as well */) {
        this.name = name;
        this.email = email;
        this.age = 0; /* protected, initialised */
        // needs nothings more
    }
}
exports.Contact1 = Contact1;
// makineg email protected will create error as email is not exposed
const x = new Contact1('x', 'y');
/* Implementing two or more interfaces */
class OtherContact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    async init() {
        this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
    }
    // OR you can have lazy initialization
    get password() {
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
class AbstractContact {
    constructor(name, // both of these should be public to satisfy HasEmail
    email) {
        this.name = name;
        this.email = email;
    }
}
/* NOTE: interfaces are "implements"ed  and abstract classes are "extends"ed */
class ConcreteClass extends AbstractContact {
    constructor(phone, // needed
    name, email) {
        super(name, email);
        this.phone = phone;
    }
    sendEmail() {
        // do something
    }
}
//# sourceMappingURL=classes.js.map