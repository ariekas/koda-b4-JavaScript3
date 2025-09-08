// mencari 20 built-in method
// mencari 5 built-in function
// jelaskan fungsi tiap tiap method dan function yang di temukan dengan mengunakan komentar
// berikan contoh pengunaan nya

// Built-in Method
Math.round
// mengambil angka desimal, dan mencarikan angka pasti yanng dapat dibulatkan angka desimal nya, atau mencar angka yang mendekati dari angka desimal yang di isi. bila angka desimal nya kurang dari 5 maka akan di buatkan menjadi angka awal. bila angka desimal nya lebih dari 5 maka akan di bulatkan menjadi angka selanjutnya
console.log(Math.round(5.95), Math.round(5.6), Math.round(5.05));

// toUpperCase()
// Mengubah string yang awalnya huruf kecil menjadi huruf besar semua
console.log("yanto".toUpperCase())

// toLowerCase()
// mengubah string yang awalnya huruf besar menjadi huruf kecil semmua
console.log("YANTO".toLowerCase())

// repeat()
// Meng outputkan sesuatu, sebanyak yang di minta
const mood = "Sad! ";
console.log(`I feel ${mood.repeat(3)}`);

// padEnd()
// Menentukan panjang string nya,bila panjang ya tidak sama maka melakukan output spasi atau karakter khusus mulai dari paling belakang string sampai memenuhi panjang yang di tentukan 
const str1 = "Breaded Mushrooms";
console.log(str1.padEnd(25, "."));

// padStart()
// Menetukan panjang string nya, bila panjang strung nya tidak sama maka akan melakukan output spasi atau karakter khusus mulai dari paling awal sampai memenuhi panjang yang di tentukan 
const fullNumber = "2034399002125581";
const maskedNumber = fullNumber.padStart(50, "*");
console.log(maskedNumber);

// slice()
// Memotong panjang sesuai yang di ingginkan, bila slice isi nya bilangan asli maka akan memotong dari paling awal, bila isi nya minus maka akan mengambil angka mulai dari paling belakang 
const number = "0812313";
const spliceNum = number.slice(6);

console.log(spliceNum);

// trim()
// Menghapus semua spasi yang ada
console.log("             ari ".trim())

// replace()
// Menggantikan nilai lama menjadi nilai yang baru
console.log("I like cat".replace("cat", "dog"));

// reverse()
// Mengubah urutan index arrray menjadi mulai dari belakang ke depan
console.log(["ari", 2, 3].reverse()); 

// join()
// Menggabungkan index array  
const arryAC = ["a", "b", "c"]
console.log(arryAC.join("-")); // "a-b-c"

// pop()
// Menghapus 1 index array yang paling belakang
const arr = [1, 2, 3];
arr.pop();
console.log(arr);

// toString()
// Mengubah menjadi string
const num = 123;
console.log(num.toString()); 

// Number()
// Mengubah menjadi number
const numStr = "100"
console.log(Number(numStr))

// max()
// Mencari angka yang paling besar 
console.log(Math.max(3, 9, 1)); 

// min()
// Mencari angka yang paling kecil
console.log(Math.min(3, 9, 1)); 

// random()
// Menglakukan output angka secara random
console.log(Math.random()); 

// push()
// Memasukan nilai di paling belakang ke array yang sudah ada
const arry = [1, 2];
arry.push(3);
console.log(arry);

// sort()
// Mengurutkan array dari yang paling kecil ke paling besar
const numRandom = [3, 1, 4];
console.log(numRandom.sort()); 


// find()
// menemukan sesuatu berdasarkan dari logika yang di masukan
const nums = [10, 20, 30];
console.log(nums.find((n) => n > 15)); 


// Built-in Function

// parseInt()
// Mengubah string angka menjadi INTEGER
const age = "18"
console.log(parseInt(age))

// parseFloat()
// Mengubah string angka menjadi FLOAT
const flt = "42.99";
console.log(parseFloat(flt)); 

// isInteger()
// Melakukan type apakah ini INTEGER
console.log(Number.isInteger(10)); 

// toString()
// Mengubah type apapun menjadi string
const bool = false
console.log(`ini adalah string ${bool.toString()}`)

// charAt()
// Mengambil first character atau index parameter parameter default value 0
const school = "smk blabal"
console.log(`sekolah di ${school.charAt()}`)


