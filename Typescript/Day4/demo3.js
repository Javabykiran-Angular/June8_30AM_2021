//annonymous function
var temp1 = function () {
    console.log("Anno.funct. without arg. & without return type ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(11, 2);
// console.log(`Addition is :: ${res}`);
// Fat Arrow Function/Arrow Function
var temp3 = function () {
    console.log("Function type 1 is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
console.log("Addition is " + temp4(7, 7));
