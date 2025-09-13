
// Request 
export interface UserCreateQuery {
  email: string;
  firstName: string;
  lastName: string | null;
  password: string;
}
export interface UserLoginQuery {
  email: string;
  password:string
}
export interface TodoCreationQuery {
  title: string;
  description:string | null;
}
export interface TodoUpdateQuery {
  title: string;
  description:string | null;
  done: boolean
}



