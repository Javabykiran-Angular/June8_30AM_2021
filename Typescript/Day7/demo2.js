//json Object
// json => java script Object notation
// it store key & value format
var obj = {
    fname: "sumit",
    "lname": "Raokhande",
    id: 9
};
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
var arrobj = [
    {
        fname: "sumit",
        "lname": "Raokhande",
        id: 9,
        month: ["Jan", "Feb", "March"],
        address: {
            area: "Ambegaon",
            pincode: 411046,
            city: 'Pune'
        },
        marks: [
            {
                id: 1,
                mark: 45
            },
            {
                id: 2,
                mark: 50
            },
            {
                id: 3,
                mark: 65
            },
        ]
    },
    {
        fname: "Spruha",
        "lname": "Raokhande",
        id: 3,
        month: ["Jan", "Feb", "March"],
        address: {
            area: "Ambegaon",
            pincode: 411046,
            city: 'Pune'
        },
        marks: [
            {
                id: 1,
                mark: 45
            },
            {
                id: 2,
                mark: 50
            },
            {
                id: 3,
                mark: 65
            },
        ]
    },
    {
        fname: "Kiran",
        "lname": "Raokhande",
        id: 6,
        month: ["Jan", "Feb", "March"],
        address: {
            area: "Ambegaon",
            pincode: 411046,
            city: 'Pune'
        },
        marks: [
            {
                id: 1,
                mark: 45
            },
            {
                id: 2,
                mark: 50
            },
            {
                id: 3,
                mark: 65
            },
        ]
    }
];
// console.log(`
//     First Name :: ${arrobj[1].fname}
//     Last Name  :: ${arrobj[1].lname}
//     ID         :: ${arrobj[1].id}
// `);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    First Name :: " + arrobj[i].fname + " \n    Last Name  :: " + arrobj[i].lname + "\n    ID         :: " + arrobj[i].id + "\n    Month      :: " + arrobj[i].month.join('  ') + "\n    ===============Address=====================\n    Area       :: " + arrobj[i].address.area + "\n    Pincode    :: " + arrobj[i].address.pincode + "\n    City       :: " + arrobj[i].address.city + "\n\n");
    for (var j = 0; j < arrobj[i].marks.length; j++) {
        console.log("\n            --------------Marks-------------\n            ID      ::" + arrobj[i].marks[j].id + "\n            Marks   ::" + arrobj[i].marks[j].mark + "\n      ");
    }
}
