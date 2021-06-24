/*
Thanks Mihir Shah for a nice task

You have a resource `resrc` and a function `get()`.
You task is to expose the function but not the resource.

The resource which needs an one time initialisation whenever 
the function is called. After the first invocation of the function,
any further calls to that function will not have any 
side effects on the resource but may use the resource.
 */

/* My solution was to use closures on bound scopes combined 
with the concept of function hoisting */
{
  /* This resource variable is local to the scope 
  which means it's not accessible outside */
  let resrc = null;

  /* getOne() has access to the blocked scope and hence the 
  resource but is hoisted up and hence accessible outside
  as well */
  function getOne() {
    if (!resrc) {
      // if resource uninitialised, initialise
      console.log(`First invocation with resource value : ${resrc}`);
      resrc = [4, 5, 6]; // intialise the resource (could be some API call)
    }
    console.log(resrc); // use the resource
  }
}

/* A better solution is by using closures and 
Immediately invoked function expressions */
const getTwo = (() => {
  let resrc = null;
  /* From closure get() will have access to resource */
  const get = function () {
    if (!resrc) {
      // if resource uninitialised, initialise
      console.log(`First invocation with resource value : ${resrc}`);
      resrc = [1, 2, 3, 4]; // initialise the resource (could be some API call)
    }
    console.log(resrc); // use the resource
  };
  return get; // return get
})();

// see _once function
// closure during react remember to ask!!
