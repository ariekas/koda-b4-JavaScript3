function wait(str, time) {
  return new Promise((resolve, reject) => {
    if (typeof str === "number") {
      reject("err: type data bukan number tapi string");
    } else {
      setTimeout(() => {
        resolve(str);
      }, time);
    }
  });
}

// async function callName() {
//   try {
//     const sapa1 = await wait("jhon", 1500);
//     console.log(sapa1);
//     const sapa2 = await wait("ed", 2000);
//     console.log(sapa2);
//     const sapa3 = await wait("jane", 500);
//     console.log(sapa3);
//   } catch (err) {
//     console.log("err: num = salah brok");
//   }
// }

function callName() {
  wait("jhon", 1500).then((str) => {
    console.log(str);
    wait("ed", 2000).then((str)=> {
        console.log(str)
        wait("jane", 500).then((str) => {
            console.log(str)
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })
  })
  .catch((err) => {
    console.log(err)
});
}

callName();
