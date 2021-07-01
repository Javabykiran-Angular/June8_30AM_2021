// Operators
// Arithematic (+,-,*,/,%)
// Logical (&&,||)
//Assignment (=,+=,-=),Post/Dec (++,--)
// relational operator (!=,<=,>=,<,>)
// Bitwise (&,|,^,~,<<,>>)
// ternary operator (condition?expression1:expression2)
var a1 = 21;
var res = a1 < 5 ? 'HI' : 'BYE';
// console.log("RES= "+res);
// console.log(`
//            Result:: ${res}`);
//Control Statement
// if, if-else,if-elseif-else,
//nested if-else
// switch()
//break,continue,goto
// LOOP
// For,While,do-while,foreach
var a2 = 2;
if (a2 < 4) {
    // console.log("Condition is true");
}
else {
    // console.log("Condition is false");
}
a2 = 5;
// switch(a2){
//     case 1:console.log("U R in Case 1");
//             break;
//     case 2: console.log("U r in Case 2");
//             break;
//     default:  console.log("U r in default Case ");
//             break;
// }
//loop
// while loop
var count = 5;
// while(count!=0){
//     console.log(`
//     Count is ${count}
//     `);
//     count--;
// }
// do{
//     console.log(`Count is ${count}`);
//     --count;
// }while(count!=0)
//For loop
// for(var i:number=0;i<5;i++){
//     console.log(`Value of i is ${i}`);
// }
// console.log("After loop Value of i is "+i);
// var has global scope
// let => it is also used to create a variable
// let has scope within nearest block 
for (var j = 0; j < 5; j++) {
    console.log("Value of j is " + j);
}
