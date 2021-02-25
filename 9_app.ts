//10. Create Interface to describe Function Types
// interfaces describing indexables

interface States<R> {
    [state: string] : R;
}

//let s: States<boolean> = {enabled : true, maximized : false};
let s: States<boolean> = {enabled : true, maximized : false};
console.log(s);
console.log(s['maximized']);
