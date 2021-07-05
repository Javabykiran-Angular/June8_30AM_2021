// Optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); //12
    console.log("Value of b is " + b); //undefined
    console.log("Addition  is " + (a + b)); // NAN
}
// add1(12);
function add2(a, b) {
    console.log("Value of a is " + a); //undefined
    console.log("Value of b is " + b); //undefined
    console.log("Addition  is " + (a + b)); // NAN
}
// add2(8,7);
// Default parameter Function
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a is " + a); //undefined
    console.log("Value of b is " + b); //undefined
    console.log("Addition  is " + (a + b)); // NAN
}
//add3(4);
// add3(4,5);
function add4(a, b) {
    if (a === void 0) { a = 7; }
    console.log("Value of a is " + a); //7
    console.log("Value of b is " + b); //undefined
    console.log("Addition  is " + (a + b)); // NAN
}
add4();
// add4(5,8)
