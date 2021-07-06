
var a:number[]=[4,5,6,7,8,9];
// for (let i = 0; i < a.length; i++) {

//     console.log("array Value is "+a[i]+" Whose index is "+i);    
// }

// console.log("Array Value is "+a);
// console.log("Dispaly Array :: "+a.join('  '));
// console.log("Dispaly Array :: "+a.join(' # '));
// console.log("Dispaly Array :: "+a.join());

//forEach

// a.forEach((myvalue,i)=>{
//     console.log("Value of array is "+myvalue+" whose index is "+i);
// });

//Rest parameter/spred oprator function

function add1(...item:number[]){
    console.log(`
        Item value is ${item}
    `);
}

// add1(4,5);
// add1(2,7,8,3,4,5,6)

var a1:number[]=[];

//1 Using Push & pop Method => It works on LIFO 
// 2 Using Splice method

// Push & Pop
a1.push(12);
// console.log(a1);
a1.push(22,33,45,67);
// console.log(a1);
var res=a1.pop();
// console.log(a1);
// console.log("Poped value is "+res);

// 2 Using Splice method

var a2=[4,5,1,2];
console.log(a2);
a2.splice(2,0,11);
console.log(a2);
a2.splice(1,0,55,88,77)
console.log(a2);
a2.splice(2,1);
console.log(a2);
a2.splice(2,2);
console.log(a2);
a2.splice(2,1,22);
console.log(a2);
a2.splice(3,2,100,101);
console.log(a2);



