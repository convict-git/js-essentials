"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* functions */
function sendEmail(to) {
    return {
        recipient: `${to.name} ${to.email}`,
        body: "Hey there"
    };
}
/* arrow functions */
const sendTextMessage = (to) => {
    return {
        recipient: `${to.name} ${to.phone}`,
        body: "hey there again..."
    };
};
const getSum = (...vals) => {
    return vals.reduce((sum, x) => { return sum + x; });
};
console.log(getSum(2, 3, 4));
/* If only the below definition exists, we can have a method "email" and people as
HasPhoneNumber[] which will violate the rules set as user
to get rid of that we will have some function declarations
Now the definition needs to be wider and should be able to contain all the
narrow declarations
But remember, don't make the definition super general, but try to keep it as
narrow as possible but still able to wider or equivalent to all the definitions */
function contactPeople(method, ...people) {
    if (method === "email") {
        people.forEach(sendEmail); // 'as' is used for typecasting
    }
    else {
        people.forEach(sendTextMessage);
    }
}
function sendMessage(// pseudo paramter 
preferredMethod) {
    if (preferredMethod === "email") {
        console.log("sendEmail");
        sendEmail(this);
    }
    else {
        console.log("sendTextMessage");
        sendTextMessage(this);
    }
}
function invokeSoon(cb, timeout) {
    setTimeout(() => cb.bind(null), timeout);
}
const c = {
    name: "xyz",
    phone: 234234,
    email: "hello@worlds.com"
};
// invokeSoon(() => sendMessage("email"), 500);
/* Doesn't work as `this` is not resolved with the type HasEmail & HasPhoneumber */
invokeSoon(() => sendMessage.bind(c, "email"), 500);
/* One way is to bind `c` as the context to sendMessage,
ensuring `c` has the right type i.e. HasEmail & HasPhoneNumber */
//# sourceMappingURL=functions.js.map