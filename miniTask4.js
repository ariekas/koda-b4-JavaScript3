const url = "https://jsonplaceholder.typicode.com/users";
const arrEmail = [];

// Handling fetch mengunakan async await
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const arrEmail = [];
    
    //   Mengunakan built in Method
    data.forEach((item) => {
      const dataEmail = item.email.toLowerCase();
        console.log(dataEmail);
    });

    //  Menampilkan list email ke dalam bentuk array
    data.forEach((item) => {
      const dataEmail = item.email.toLowerCase();
      arrEmail.push(dataEmail);
    });
      console.log(arrEmail);

    //   Tampa Mengunakan built in Method
    const upper = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const lower = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    let arrayEmail = [];
    for (let a = 0; a < data.length; a++) {
      let email = data[a].email;
      let result = "";

      for (let i = 0; i < email.length; i++) {
        let char = email[i];
        let index = upper.indexOf(char);
        if (index !== -1) {
          result += lower[index]; // ubah ke huruf kecil
        } else {
          result += char; // biarkan jika bukan huruf besar
        }
      }
      arrayEmail[a] = result;
    }
    console.log(arrayEmail);
  } catch (error) {
    console.log(error + "Error : Gagal Mengambil Data");
  }
}

function getDataAll() {
  fetch(url)
    .then((ress) => ress.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error + "Error : Gagal Mengambil Data");  
    });
}

getData();
