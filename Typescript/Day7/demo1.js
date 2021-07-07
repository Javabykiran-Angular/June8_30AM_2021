//slice
// It copies section of data & return a new array
var a = [4, 5, 6, 7, 8, 1, 9, 22, 44];
// console.log("Original Array "+a);
var temp = a.slice(1, 6);
// console.log("Copied data "+temp);
var temp1 = a.slice(1);
// console.log("Copied data "+temp1);
//map
var a1 = [2, 3, 4, 5, 6];
var res = a1.map(function (value) {
    return (value * value);
});
console.log(a1);
console.log(res);
