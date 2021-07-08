"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(myid, fname, lname) {
        this.id = myid;
        this.fname = fname;
        this.lname = lname;
    }
    Myclass.prototype.Display = function () {
        console.log("\n        -----------Display Data-----------        \n        ID         ::" + this.id + "\n        First Name :: " + this.fname + "\n        Last Name  :: " + this.lname + " \n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
// var obj=new Myclass(9,"Sumit","Raokhande");
// obj.Display();
