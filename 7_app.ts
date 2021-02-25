interface Command<T, R> {
    id : T;
    run(): R;
}

let c: Command<String, number> = {
   // id: Math.random().toString(36),
    id: '123sfddfsd',
    run: function() {
        return 3;
    }
}

console.log(c.id);
console.log(c.run);