
//1 function without argument & without return type
//2 function with arg. & without return type
//3 function without argument & with return type
//4 function with arg. & with return type

//1 function without argument & without return type

function add1(){
    console.log("function without argument & without return type");
}


// add1()

//2 function with arg. & without return type

function add2(a:number,b:number){
    console.log("Addition is "+(a+b))
}

// add2(3,2);

//3 function without argument & with return type

function add3():number{
    return (4+5);
}

// console.log(`
// Addition is :: ${add3()}
// `);

//4 function with arg. & with return type

function add4(a:number,b:number):number{

    return (a+b);
}

var res=add4(10,2);
console.log("Addition is "+res);

