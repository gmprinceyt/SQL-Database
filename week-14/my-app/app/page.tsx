interface User {
  name: string;
  email: string;
}
async function getUserData() {
  const response = await new Promise<User>((res) => {
   setTimeout(()=> res({
      name: "Prince",
      email: "gmprince420@gmail.com",
    }), 1000)
  });

  return response;
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
