import { HasPhoneNumber, HasEmail } from "./basics"

/* functions */
function sendEmail(to: HasEmail): { recipient: string; body: string; } {
   return {
      recipient: `${to.name} ${to.email}`,
      body: "Hey there"
   }
}

/* arrow functions */
const sendTextMessage = (to: HasPhoneNumber): { recipient: string; body: string; } => {
   return {
      recipient: `${to.name} ${to.phone}`,
      body: "hey there again..."
   }
}

const getSum = (...vals: number[]): number => {
   return vals.reduce((sum, x) => { return sum + x; })
}

console.log(getSum(2, 3, 4))

// functions can have multiple function signatures
function contactPeople(method: "email", ...people: HasEmail[]): void;
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

/* If only the below definition exists, we can have a method "email" and people as 
HasPhoneNumber[] which will violate the rules set as user 
to get rid of that we will have some function declarations 
Now the definition needs to be wider and should be able to contain all the 
narrow declarations 
But remember, don't make the definition super general, but try to keep it as 
narrow as possible but still able to wider or equivalent to all the definitions */
function contactPeople(
   method: "email" | "phone",
   ...people: (HasPhoneNumber | HasEmail)[]
): void {
   if (method === "email") {
      (people as HasEmail[]).forEach(sendEmail); // 'as' is used for typecasting
   } else {
      (people as HasPhoneNumber[]).forEach(sendTextMessage);
   }
}

function sendMessage(
   this: HasEmail & HasPhoneNumber, // pseudo paramter 
   preferredMethod: "email" | "phone"
): void {
   if (preferredMethod === "email") {
      console.log("sendEmail");
      sendEmail(this);
   } else {
      console.log("sendTextMessage");
      sendTextMessage(this);
   }
}

function invokeSoon(cb: () => any, timeout: number): void {
   setTimeout(() => cb.bind(null), timeout);
}

const c: HasEmail & HasPhoneNumber = {
   name: "xyz",
   phone: 234234,
   email: "hello@worlds.com"
}

// invokeSoon(() => sendMessage("email"), 500);
/* Doesn't work as `this` is not resolved with the type HasEmail & HasPhoneumber */

invokeSoon(() => sendMessage.bind(c, "email"), 500);
/* One way is to bind `c` as the context to sendMessage,
ensuring `c` has the right type i.e. HasEmail & HasPhoneNumber */



