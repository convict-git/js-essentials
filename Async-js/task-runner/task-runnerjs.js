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
    const newInp = await curPromise;
    return f(newInp);
  }, inp);
}

// ----------------------- Test Suite -----------------------
function add1AsyncFunc(x) {
  console.log(`Inside add1AsyncFunc(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 1);
    }, Math.random() * 1000);
  });
}

function add2SyncFunc(x) {
  console.log(`Inside add2SyncFunc(): Sync, ${x}`);
  return x + 2;
}

function add3AsyncFunc(x) {
  console.log(`Inside add3AsyncFunc(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 3);
    }, Math.random() * 2000);
  });
}

function faultyAsyncFunc(x) {
  console.log(`Inside faultyAsyncFunc(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    reject(`I'm a bad 'Async' function from inception`);
  });
}

function faultySyncFunc(x) {
  console.log(`Inside faultySyncFunc(): Sync, ${x}`);
  throw `I'm a bad 'Sync' function from inception`;
}

function add4SyncFunc(x) {
  console.log(`Inside add4SyncFunc(): Sync, ${x}`);
  return x + 4;
}

function noRetSyncFunc() {
  console.log(`Inside noRetSyncFunc(): Sync, NO RETURN VALUE`);
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
    add1AsyncFunc,
    add2SyncFunc,
    add3AsyncFunc,
    add4SyncFunc,
  ],
  [
    // Test 2 - All successful functions but Final function has no return value
    2,
    `All successful functions but Final function has NO RETURN VALUE`,
    0,
    add1AsyncFunc,
    add2SyncFunc,
    add3AsyncFunc,
    add4SyncFunc,
    noRetSyncFunc,
  ],
  [
    // Test 3 - Faulty `Sync` function throwing error in between the pipeline
    3, // testId
    `Faulty 'Sync' function throwing error in between the pipeline`, // desc
    0,
    add1AsyncFunc,
    add2SyncFunc,
    faultySyncFunc,
    add3AsyncFunc,
    add4SyncFunc,
  ],
  [
    // Test 4 - Faulty `Async` function returning a reject promise in between the pipeline
    4, // testId
    `Faulty 'Async' function returning a reject promise in between the pipeline`, // desc
    0,
    add1AsyncFunc,
    add2SyncFunc,
    faultyAsyncFunc,
    add3AsyncFunc,
    add4SyncFunc,
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

test(...testsInp[1]); // try 0, 1, 2, 3, 4 to run different tests
