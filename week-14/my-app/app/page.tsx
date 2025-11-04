import Link from "next/link";
import client from "./db";
async function getUserData() {
  const user = await client.user.findFirst({});
  return user;
}

export default async function Home() {
  const user = await getUserData();

  return (
    <div className="w-full  h-screen  flex  justify-center items-center ">
      <Link href={"/signup"}>
      <div className="border px-2 py-4 border-slate-300 ">
        <div className="">Email: {user?.username}</div>
        <div className="">Password: {user?.password}</div>
      </div>
      </Link>
    </div>
  );
}
