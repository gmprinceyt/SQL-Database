interface User {
  name: string;
  email: string;
}
async function getUserData() {
  const response = await fetch("http://localhost:3000/api/user");
  const data = await response.json()
  return data;
}

export default async function Home() {
  const user = await getUserData();

  return (
    <div className="w-full  h-screen  flex  justify-center items-center ">
      <div className="">
        <div className="">{user.name}</div>
      <div className="">{user.email}</div>
      </div>
    </div>
  );
}
