const receivesAFunction = (func) => {
    const spy = func;
    return spy();
};


function returnsANamedFunction () {
    const spy = () => { console.log("Spy inside returns a named function")};
    return spy;
}


// function receivesAFunction ()spy) {

function returnsAnAnonymousFunction (){
    return  () => { console.log("The anonymous function.")}
}

let val = receivesAFunction( () => {
    let num = 2;
    // console.log(num);
    return num;
} );


returnsAnAnonymousFunction();
let named = returnsANamedFunction();
let anonym = returnsAnAnonymousFunction();


console.log(val);
named();
// anonym();