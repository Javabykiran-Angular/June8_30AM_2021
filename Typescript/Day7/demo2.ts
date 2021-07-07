//json Object
// json => java script Object notation
// it store key & value format

var obj={
    fname:"sumit",
    "lname":"Raokhande",
    id:9
}

// 2 ways to parse a data
// 1 using dot operator
// 2 using square operator

//1 Dot operator
// console.log(`
//     First name :: ${obj.fname}
//     Last Name :: ${obj.lname}
//     ID         :: ${obj.id}
// `);

// 2 Square operator

// console.log(`
//     First Name :: ${obj["fname"]}
//     Last Name  :: ${obj['lname']}
//     ID         :: ${obj["id"]}
// `);

//Array Of object
var arrobj=[
    {
        fname:"sumit",
        "lname":"Raokhande",
        id:9,
        month:["Jan","Feb","March"],
        address:{
            area:"Ambegaon",
            pincode:411046,
            city:'Pune'
        },

        marks:[
            {
                id:1,
                mark:45
            },
            {
                id:2,
                mark:50
            },
            {
                id:3,
                mark:65
            },
        ]

    },

    {
        fname:"Spruha",
        "lname":"Raokhande",
        id:3,
        month:["Jan","Feb","March"],
        address:{
            area:"Ambegaon",
            pincode:411046,
            city:'Pune'
        },
        marks:[
            {
                id:1,
                mark:45
            },
            {
                id:2,
                mark:50
            },
            {
                id:3,
                mark:65
            },
        ]
    },
    {
        fname:"Kiran",
        "lname":"Raokhande",
        id:6,
        month:["Jan","Feb","March"],
        address:{
            area:"Ambegaon",
            pincode:411046,
            city:'Pune'
        },
        marks:[
            {
                id:1,
                mark:45
            },
            {
                id:2,
                mark:50
            },
            {
                id:3,
                mark:65
            },
        ]
    }

];

// console.log(`
//     First Name :: ${arrobj[1].fname}
//     Last Name  :: ${arrobj[1].lname}
//     ID         :: ${arrobj[1].id}
// `);

for (let i = 0; i < arrobj.length; i++) {
  
    console.log(`
    First Name :: ${arrobj[i].fname} 
    Last Name  :: ${arrobj[i].lname}
    ID         :: ${arrobj[i].id}
    Month      :: ${arrobj[i].month.join('  ')}
    ===============Address=====================
    Area       :: ${arrobj[i].address.area}
    Pincode    :: ${arrobj[i].address.pincode}
    City       :: ${arrobj[i].address.city}

`);
    for (let j = 0; j < arrobj[i].marks.length; j++) {
      console.log(`
            --------------Marks-------------
            ID      ::${arrobj[i].marks[j].id}
            Marks   ::${arrobj[i].marks[j].mark}
      `);
        
    }
    
}