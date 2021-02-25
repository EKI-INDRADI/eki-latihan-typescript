let names: string[] = ["a1", "a2", "a3"]
let names_any: any = []
let names_any2: any = ["asdsda", 1231231, "!@&^$!&^@%"]
let fruits: Array<string> = ["Apple", "Orange"]
let numbers: Array<number> = [2, 3, 4, , 6,6 , 7, 8]



// tipe dat tuple :

let student: [string, string, number] = ["1002", "zxczx", 123131]

// arrray = terbatas tipe datanya
// tuple =  tipe datanya berbeda2 support

let product: [string, number] = ["handphone", 10000]
//let product : [string,number] = ["handphone", 10000,100]  <<<=== ini akan error

// pengecekan error tuple lebih aman karena sudah di beriinfo error sblm code running

// akses data array / tuple

console.log(product[0])

console.log(student[0])

console.log(numbers[5])

numbers[7] = 12
//erorr
numbers.push(3)
numbers.push(7)

delete numbers[2]
console.log(numbers)