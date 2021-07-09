"use strict";
exports.__esModule = true;
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(city, area, pincode) {
        this.city = city;
        this.area = area;
        this.pincode = pincode;
    }
    Address.prototype.getCity = function () {
        return (this.city);
    };
    Address.prototype.getArea = function () {
        return (this.area);
    };
    Address.prototype.getPincode = function () {
        return (this.pincode);
    };
    return Address;
}());
exports.Address = Address;
