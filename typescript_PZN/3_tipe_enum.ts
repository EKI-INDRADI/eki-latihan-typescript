// di JS ga ada enum
// di ts ada enum

// enum = data yang inputnya harus sesuai format (inputan sesuai kategori)


//enum Gender { Male,Female, Unkown }
//            { 0,1, 2}  <<<=== sebanrnya enum adalah integer
// detailnya silahkan convert tsc agar menjadi js
// tsc 3_tipe_enum.ts
enum Gender { Male,Female, Unkown }
enum Gender1 { Male = 0,Female = 1, Unkown = 2}

enum Gender2 { Male =2,Female = 7, Unkown = 99}

enum kategori{ Male = "Male",Female = "Female", Unkown = "Unkown"}
let JK : Gender = Gender.Male;
let JK1 : Gender1 = Gender1.Female;
let JK2 :Gender2 =Gender2.Unkown
let JK3 : kategori = kategori.Female
console.log(JK);
console.log(JK1);
console.log(JK2);
console.log(JK3)