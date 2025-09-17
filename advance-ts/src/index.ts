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

// Started ! - Typesscript Apis 1
//? Pick
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

// Pick Api
type ProfileUser = Pick<User, "name" | "email" | "age">;

/**
 * Now Pack luck like  
 * type ProfileUser = {
    name: string;
    email: string;
    age: number;
}
 */

// Example
function renderProfileDetails(userInfo: ProfileUser) {
  console.log(userInfo.age, userInfo.email, userInfo.name);
}
// renderProfileDetails({ name: "Prince ", age: 19, email: "prince@gmail.com" });


//? Partial 2
/**
 * Partial Convert types properties into Optional types
*/

interface Triangle {
    color:string;
    height: number;
    width: number;
};

// Partial Api
type Shape = Partial<Triangle>;

/**
 * Now all Types Properties are made optional 
 * type Shape = {
    color?: string;
    height?: number;
    width?: number;
}
 */

// Example  

function updateDatainDatbase(shape:Shape){
    if (shape.color){
        console.log("color Changed")
    }
    if (shape.height){
        console.log("height Changed")
    }
    if (shape.width){
        console.log("width Changed")
    };
};
// updateDatainDatbase({color: "red"}) // typescript not complain  


// readonly 3

// interface User2 {
//     readonly email: string; 
//     readonly name: string; 
//     readonly age: number;
// };


// readonly Api
// type User2  = Readonly<User> // Readonly
type User2  = Partial<Readonly<User>> // Make Optional and readionly

const userPrince:User2 =  {
    email: "gmprince@gmail.com",
    name: "Prince",
    age:19,

};
// console.log(userPrince)

// userPrince.email = "akbbdjafk" //Cannot assign to 'email' because it is a read-only property.ts(2540)


// Record and Maps 4 

// type User3 = {
//     [key:string]: Pick<User, "name"| "age"|"password">
// }


/**
 * Record 
 * use to give in  object  or keys values pairs
 *        keys   , values 
 * Record<string, number>
 */

// Cleaner Way - Record Api 
type User3 = Record<string, Pick<User, "name"| "age"|"password">>
const user:User3 = {
    some : {
        name: "Prince",
        age: 19, 
        password:"male"
    }, 
    some1: {
        name: "Aman",
        age: 20,
        password:  "female"
    }
};


// Map class 
const user2 = new Map<string, Pick<User, "name"| "age"| "password">>();

user2.set("1234", {name: "prince", age: 18, password: "sceretpass"})
user2.set("1235", {name: "aman", age: 21, password: "password"})
const u1234 = user2.get("1234");
// console.log(u1234) 

// ? Exclude 

/**
 * Exclude 
 * is some like pick but exclude not picked is diselect properties in types 
 */

type TEvent = "click" | "mousemove" | "scroll";
type TExcludeEvent = Exclude<TEvent, "scroll"> //  "click" | "mousemove"

function EventHandler(event:TExcludeEvent){
    console.log("Handle Event", event);
};

// EventHandler("click") // only can i use  - "click" | "mousemove"