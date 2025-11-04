"use server";

import client from "../db";

interface User {
  username: string;
  password: string;
}

export async function SigninUser({ username, password }: User) {
  try {
    const user = await client.user.create({
      data: {
        password,
        username,
      },
    });
    console.log(user.id);
    return "User Create Successfully!";
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return error;
    }
  }
}
