import { FormEvent, useState } from "react";

interface User {
  email: string;
  name: string;
}

export default function Signup() {
  const [user, setUser] = useState<User>({
    email: "",
    name: "",
  });
  const [response, setResponse] = useState({
    data: undefined,
    Isloading: false,
    error: "",
  });

  function SubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target);
    setResponse((p) => ({ ...p, Isloading: true }));
    fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => setResponse((p) => ({ ...p, data })))
      .catch((error) => setResponse((p) => ({ ...p, error })))
      .finally(() => setResponse((p) => ({ ...p, Isloading: false })));
  }

  return (
    <div className="max-w-7xl h-screen mx-auto text-black ">
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col h-full  justify-center items-center"
      >
        <input
          onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
          placeholder="Type Email "
          className="outline-blue-400 rounded-md border-2 border-slate-500 py-2 w-1/3 px-3 m-2"
          type="email"
          name="email"
        />
        <input
          onChange={(e) => setUser((p) => ({ ...p, name: e.target.value }))}
          placeholder="Type Fullname "
          className="outline-blue-400 rounded-md border-2 border-slate-500 py-2 w-1/3 px-3 m-2"
          type="text"
          name="name"
        />

        <button
          className="bg-gray-900 rounded-xl px-9 py-2 hover:bg-gray-700 text-white border-2 "
          type="submit"
        >
          {response.Isloading ? (
            <div className="animate-pulse text-xl">...</div>
          ) : (
            "Signup"
          )}
        </button>
      </form>
    </div>
  );
}
