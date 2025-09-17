"use strict";
// interface User {
//   name: string;
//   age: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Example
function renderProfileDetails(userInfo) {
    console.log(userInfo.age, userInfo.email, userInfo.name);
}
renderProfileDetails({ name: "Prince ", age: 19, email: "prince@gmail.com" });
