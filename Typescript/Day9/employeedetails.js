"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var address_1 = require("./address");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, sal, role, c, a, pincode) {
        this.fname = f;
        this.lname = l;
        this.salary = sal;
        this.dept = new department_1.Department(role);
        this.addr = new address_1.Address(c, a, pincode);
    }
    EmployeeDetails.prototype.Display = function () {
        console.log("\n       =============Employee Details============\n        First Name  :: " + this.fname + "\n        Last Name   :: " + this.lname + "\n        Salary      :: " + this.salary + "\n        Role        :: " + this.dept.getRole() + "\n        Area        :: " + this.addr.getArea() + "\n        City        :: " + this.addr.getCity() + "\n        Pincode     :: " + this.addr.getPincode() + "\n       ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
