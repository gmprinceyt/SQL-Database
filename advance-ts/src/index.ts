// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const finalAge = sumOfAge(
//   { name: "prince", age: 19 },
//   { name: "Aman", age: 21 }
// );
// console.log(finalAge); // 40

// Started ! - Typesscript Apis
//? Pack
/**
 * Pick Allow to create a new type by selecting a set of properties(Key) from an existing types/interface
 *
 */

interface User {
  id: string;
  email: string;
  name: string;
  age: number;
  password: string;
  createdAt: Date;
}

// Pack Api
type ProfileUser = Pick<User, "name" | "email" | "age">;

// Example
function renderProfileDetails(userInfo: ProfileUser) {
  console.log(userInfo.age, userInfo.email, userInfo.name);
}
renderProfileDetails({ name: "Prince ", age: 19, email: "prince@gmail.com" });
