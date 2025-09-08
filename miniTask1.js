// mencari 1 build in method atau function
// membuat proses manual sesuai dengan build in method atau function yang di temukan
// koda-b4-javascript3

// using build in method map
const num = [1,2,3,4]
const usingMap = num.map((x) => x * 5 / 2)
console.log(usingMap)


const newNumArray = [];
for (let i = 0; i < num.length; i++) {
    newNumArray[i] = num[i] * 5 / 2;
  }
console.log(newNumArray);

