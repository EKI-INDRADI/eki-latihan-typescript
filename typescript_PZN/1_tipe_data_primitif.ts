let isDone : boolean = false;
let isMarried: boolean = true;

//error
// isMarried = "eki";  << di ts ga bs di js bs

let decimal: number = 6;
let hex:number = 0xf00d;
let binary : number = 0b1010;
let octal: number = 0o744;
let age:number = 20;

//error
//age = true;
//age = "eki";

let nama: string = "Eki Indradi";  //<== " "    string
nama = nama + ' Indradi';  //<=== ' '   string

let hello: string = `Hello ${nama}`; //<<=== string substitute   ` `

console.log(hello)
//error
//nama= true;