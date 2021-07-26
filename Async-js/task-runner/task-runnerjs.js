/*
// TODO: Make this iterative
async function taskRunner(inp, f, ...fn) {
  const out = await f(inp);
  return fn.length != 0 ? taskRunner(out, ...fn) : out;
}
*/

// Iterative version of taskRunner
async function taskRunner(inp, ...fn) {
  return fn.reduce(async (curPromise, f) => {
    return f(await curPromise);
  }, inp);
}

// ----------------------- Test Suite -----------------------
function add1Async(x) {
  console.log(`Inside add1Async(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 1);
    }, Math.random() * 1000);
  });
}

function add2Sync(x) {
  console.log(`Inside add2Sync(): Sync, ${x}`);
  return x + 2;
}

function add3Async(x) {
  console.log(`Inside add3Async(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 3);
    }, Math.random() * 2000);
  });
}

function faultyAsync(x) {
  console.log(`Inside faultyAsync(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    reject(`I'm a bad 'Async' function from inception`);
  });
}

function faultySync(x) {
  console.log(`Inside faultySync(): Sync, ${x}`);
  throw `I'm a bad 'Sync' function from inception`;
}

function add4Sync(x) {
  console.log(`Inside add4Sync(): Sync, ${x}`);
  return x + 4;
}

function noRetSync() {
  console.log(`Inside noRetSync(): Sync, NO RETURN VALUE`);
}

const testsInp = [
  [
    // Test 0 - Empty pipeline
    0, //
    `This is an empty pipeline`, // desc
  ],
  [
    // Test 1 - All successful functions
    1, // testId
    `All successful functions, Syncs and Asyncs in chain`, // desc
    0,
    add1Async,
    add2Sync,
    add3Async,
    add4Sync,
  ],
  [
    // Test 2 - All successful functions but Final function has no return value
    2,
    `All successful functions but Final function has NO RETURN VALUE`,
    0,
    add1Async,
    add2Sync,
    add3Async,
    add4Sync,
    noRetSync,
  ],
  [
    // Test 3 - Faulty `Sync` function throwing error in between the pipeline
    3, // testId
    `Faulty 'Sync' function throwing error in between the pipeline`, // desc
    0,
    add1Async,
    add2Sync,
    faultySync,
    add3Async,
    add4Sync,
  ],
  [
    // Test 4 - Faulty `Async` function returning a reject promise in between the pipeline
    4, // testId
    `Faulty 'Async' function returning a reject promise in between the pipeline`, // desc
    0,
    add1Async,
    add2Sync,
    faultyAsync,
    add3Async,
    add4Sync,
  ],
];

const test = (testId, desc, inp, ...fn) => {
  console.log(`\n\n
  -------------------------------------------
  Running test ${testId}: [ ${desc} ]`);
  taskRunner(inp, ...fn)
    .then((x) => {
      console.log(`final result is ${x}`);
    })
    .catch((e) => {
      console.log(`Error caught: ${e}`);
    });
};

test(...testsInp[3]); // try 0, 1, 2, 3, 4 to run different tests
