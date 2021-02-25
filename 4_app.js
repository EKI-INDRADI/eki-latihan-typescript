//7. Generic Function with Multiple Type Variables
// multiple type variables
function getInfo(id, name) {
    console.log(" tipe data nya berupa : " + typeof id + ', ' + typeof name, 'getInfo');
    console.log(" result nya berupa : " + id + ', ' + name, 'getInfo');
}
getInfo(1, 'Jane'); // number, string
//generic with no generic type
function displayType(id, name) {
    console.log(" tipe data nya berupa : " + typeof id + ', ' + typeof name);
    console.log(" result nya berupa : " + id + ', ' + name);
}
displayType(2, 'Malik'); // number, string
