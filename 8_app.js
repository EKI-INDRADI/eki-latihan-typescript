function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] == toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 1);
console.log(b);
var b2 = checker(items, 5, 2);
console.log(b2);
