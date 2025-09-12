export  interface UserCreateQuery  { 
    email:string;
    firstName: string;
    lastName:string | null;
    password:string
}