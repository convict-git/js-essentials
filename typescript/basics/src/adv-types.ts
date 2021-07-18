/* Advanced types */
import { HasEmail, HasPhoneNumber, } from "./basics";

interface CommunicationMethods {
   email: HasEmail;
   phone: HasPhoneNumber;
   fax: { fax: number }; /* You can add a shape (type) here itself instead of interface*/
}

/* when we wrote `contactPeople` in functions.ts, we have to, for each interface,
give method signatures to overload,  and then a more general signature (wider) in
definition

But this becomes a mess and doesn't scale with increasing interfaces
*/

function contactPeople
   <K extends keyof CommunicationMethods>
   (method: K, ...people: CommunicationMethods[K][]): void {
}

/* keyof InterfaceName gives out union of strings (property keys),
there's no other way to extend a string than using the string the string itself */

/* using infer makes us declare a new generic paramter S which is needed further 
to be infered based on what was passed as a parameter T
*/
type EventualType<T> = T extends Promise<infer S> ? S : T;


