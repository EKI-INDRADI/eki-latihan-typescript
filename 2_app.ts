// 5. Generic Function

function LoggerAndReturn<T>(thing: T) : T {
    return  thing;
}

//const message: string = LoggerAndReturn<string>("Hello wolrd");
const message: string = LoggerAndReturn<string>("Hello wolrd");
const message2: number = LoggerAndReturn(2);
console.log(message);
console.log(message2);

