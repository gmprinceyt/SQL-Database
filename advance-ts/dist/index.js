"use strict";
// interface User {
//   name: string;
//   age: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Now Pack luck like
 * type ProfileUser = {
    name: string;
    email: string;
    age: number;
}
 */
// Example
function renderProfileDetails(userInfo) {
    console.log(userInfo.age, userInfo.email, userInfo.name);
}
;
/**
 * Now all Types Properties are made optional
 * type Shape = {
    color?: string;
    height?: number;
    width?: number;
}
 */
// Example  
function updateDatainDatbase(shape) {
    if (shape.color) {
        console.log("color Changed");
    }
    if (shape.height) {
        console.log("height Changed");
    }
    if (shape.width) {
        console.log("width Changed");
    }
    ;
}
;
const userPrince = {
    email: "gmprince@gmail.com",
    name: "Prince",
    age: 19,
};
const user = {
    some: {
        name: "Prince",
        age: 19,
        password: "male"
    },
    some1: {
        name: "Aman",
        age: 20,
        password: "female"
    }
};
// Map class 
const user2 = new Map();
user2.set("1234", { name: "prince", age: 18, password: "sceretpass" });
user2.set("1235", { name: "aman", age: 21, password: "password" });
const u1234 = user2.get("1234");
console.log(u1234);
