// /9. Generic Interfaces to describe Object Properties

//interfaces describing object properties


interface Pair<T,U>{
    first : T;
    second: U;
}

let p: Pair<string, number> = { first : '10K', second: 1000};
console.log(p)
const person : Pair<string, string> = { first: 'jane', second : 'Malik'};
console.log(person);


