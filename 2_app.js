// Generic Function
function LoggerAndReturn(thing) {
    return thing;
}
//const message: string = LoggerAndReturn<string>("Hello wolrd");
var message = LoggerAndReturn("Hello wolrd");
var message2 = LoggerAndReturn(2);
console.log(message);
console.log(message2);
