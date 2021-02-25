//7. Generic Function with Multiple Type Variables

// multiple type variables


function getInfo<T, U>(id: T, name:U): void {
    console.log(" tipe data nya berupa : " +  typeof id + ', ' + typeof name, 'getInfo');

    console.log(" result nya berupa : " +   id + ', ' + name, 'getInfo');
}

getInfo<number, string>(1, 'Jane'); // number, string

//generic with no generic type
function displayType<T>(id: T, name: string): void {
  console.log(" tipe data nya berupa : " + typeof id + ', ' + typeof name);

  console.log(" result nya berupa : " +  id + ', ' + name);
}

displayType<number>(2,'Malik'); // number, string