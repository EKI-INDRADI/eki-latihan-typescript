function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var mystrArr = getArray(["Hello", "World"]);
mystrArr.push("Hellox");
myNumArr.push(3);
console.log(myNumArr);
console.log(mystrArr);
