async function taskRunner(inp, f, ...fn) {
  const out = await f(inp);
  return fn.length != 0 ? taskRunner(out, ...fn) : out;
}

function f1_async(x) {
  console.log(`Inside f1(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 1);
    }, Math.random() * 1000);
  });
}

function f2_async(x) {
  console.log(`Inside f2(): Async, ${x}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 2);
    }, Math.random() * 1000);
  });
}

function f3_sync(x) {
  console.log(`Inside f3(): Sync, ${x}`);
  return x + 5;
}

function f4_sync(x) {
  console.log(`Inside f4(): Sync, ${x}`);
  return x + 5;
}

function f5_sync_no_ret() {
  console.log(`Inside f5(): Sync, no return value`);
}

const test = ((inp, ...fn) => {
  taskRunner(inp, ...fn)
    .then((x) => {
      console.log(`final result is ${x}`);
    })
    .catch((e) => {
      console.log(`Error caught: ${e}`);
    });
  // })(0, f1_async, f3_sync, f2_async, f4_sync, f5_sync_no_ret);
})(0, f1_async, f3_sync, f2_async, f4_sync);
