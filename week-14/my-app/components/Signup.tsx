import { FormEvent, useState } from "react";
import Loader from "./Loader";


export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
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
    <div className="max-w-7xl h-screen mx-auto text-black px-7">
      <form
        className=" h-full w-full  flex flex-col justify-center items-center gap-4   "
        onSubmit={SubmitHandler}
      >
        <div className="lg:w-1/3 w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter your email address
          </label>
          <input
            onChange={(e) => setUser((p) => ({ ...p, username: e.target.value }))}
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="lg:w-1/3 w-full">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter your password
          </label>
          <input
            onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
            type="password"
            id="name"
            name="name"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Joun Doe"
            required
          />
        </div>

        <div className="lg:w-1/3 w-full">
          <button
            type="submit"
            className="text-white  bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-5 py-2.5"
          >
            {response.Isloading ? <Loader /> : "Signup"}
          </button>
        </div>
      </form>
    </div>
  );
}
