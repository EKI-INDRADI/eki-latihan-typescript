// 6. Generic Function with T Array Type
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let mystrArr = getArray(["Hello", "World"]);



mystrArr.push("Hellox");
myNumArr.push(3);

console.log(myNumArr);
console.log(mystrArr);