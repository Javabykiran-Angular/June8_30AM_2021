// Optional parameter function

function add1(a:number,b?:number)
{
    console.log("Value of a is "+a);//12
    console.log("Value of b is "+b);//undefined
    console.log("Addition  is "+(a+b)); // NAN
}


// add1(12);

function add2(a?:number,b?:number)
{
    console.log("Value of a is "+a);//undefined
    console.log("Value of b is "+b);//undefined
    console.log("Addition  is "+(a+b)); // NAN
}


// add2(8,7);

// Default parameter Function

function add3(a:number,b:number=10){
    console.log("Value of a is "+a);//undefined
    console.log("Value of b is "+b);//undefined
    console.log("Addition  is "+(a+b)); // NAN
}

//add3(4);
// add3(4,5);

function add4(a:number=7,b?:number){
    console.log("Value of a is "+a);//7
    console.log("Value of b is "+b);//undefined
    console.log("Addition  is "+(a+b)); // NAN
}

// add4();
// add4(5,8)

function add5(a:number=7,b?:number,c?:number){
    console.log("Value of a is "+a);//7
    console.log("Value of b is "+b);//undefined
    console.log("Addition  is "+(a+b)); // NAN
}


function add6(a:number,b?:number,c?:number){
    console.log("Value of a is "+a);//7
    console.log("Value of b is "+b);//undefined
    console.log("Addition  is "+(a+b)); // NAN
}


