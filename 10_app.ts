// 11. Generic Classes and Interfaces

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y : T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){
    return x+y;
};

interface Collection<T> {
    add(t: T): void;
    remove(t: T): void;
    asArray(): T[];
}

class List<T> implements Collection<T> {
    private data: T[] = [];

    add(t: T): void {
        this.data.push(t);
    }

    remove(t: T): void {
        let index =  this.data.indexOf(t);
       if (index > -1){
           this.data.splice(index, 1);
       }
    }

    asArray(): T[]{
        return this.data;
    }

}


let numbers: Collection<number> =  new List();
numbers.add(11);
numbers.add(12);
numbers.add(13);
numbers.remove(12);
let numArray = numbers.asArray();
console.log(numArray);


