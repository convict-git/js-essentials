let p_0 = new Promise((res, rej) => {
  return res(0);
});

let p_1 = new Promise((res, rej) => {
  return res(1);
});

let p_2 = new Promise((res, rej) => {
  //   return res({ x: 2, y: 3 });
  //   throw 3;
  return rej(3);
});

Promise.all([p_0, p_1, p_2])
  .then((values) => {
    console.log(values);
  })
  .catch((res) => {
    console.log(`reason ${res}`);
  });

p_1.then((obj) => {
  console.log(obj);
});
// queue -> x

for (let x = 1; x <= 5; x++) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`x is : ${x}`);
      resolve(x);
    }, Math.random() * 2000);
  })
    .then((x) => x + 1)
    .then((x) => {
      console.log(`x logged: ${x}`);
    });
}

// for (let x = 10; x <= 15; x++) {
//   let xp = await new Promise((resolve) => {
//     setTimeOut(() => {
//       console.log(`x is : ${x}`);
//       resolve(x);
//     }, Math.random() * 2000);
//   });

//   xp += 1;
//   console.log(`x is logged: ${x}`);
// }

let pppp = new Promise((resolve, reject) => {
  reject("hello");
})
  .then()
  .catch((msg) => {
    console.log(msg);
    return msg;
  })
  .catch((msg) => {
    console.log(msg);
  });
