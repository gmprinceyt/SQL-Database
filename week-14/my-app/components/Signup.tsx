import { FormEvent, useState } from "react";
import Loader from "./Loader";
import { SigninUser } from "@/app/actions/user";

interface ResponseType {
  Isloading: boolean;
  data: undefined | string;
  error: string;
}

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState<ResponseType>({
    Isloading: false,
    data: undefined,
    error: "",
  });

  async function SubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResponse((p) => ({ ...p, Isloading: true }));

    try {
      const res = await SigninUser(user);
      if (res === "User Create Successfully!") {
        setResponse((p) => ({ ...p, data: res }));
        alert(res);
      }
    } catch (error) {
      if (error instanceof Error) {
        setResponse((p) => ({ ...p, error: error.message }));
      }
    } finally {
      setResponse((p) => ({ ...p, Isloading: false }));
    }
  }
  return (
    <div className="max-w-7xl h-screen mx-auto flex items-center justify-center flex-col text-black px-7">
      <h1 className="text-6xl leading-9 tracking-tight text-center font-extrabold  ">Feel free to Signin your account with secure data </h1>
      {/* Alert */}
      <div
        className="mb-4 text-sm text-red-800 rounded-lg bg-red-50"
        role="alert"
        >
          </div>
      <form
        className="w-full"
        onSubmit={SubmitHandler}
      >

          {response.error}

        {/* inputs */}
        <div className="lg:w-1/3 w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter your email address
          </label>
          <input
            onChange={(e) =>
              setUser((p) => ({ ...p, username: e.target.value }))
            }
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
            onChange={(e) =>
              setUser((p) => ({ ...p, password: e.target.value }))
            }
            type="password"
            id="name"
            name="name"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Joun Doe"
            required
          />
        </div>
        <div className="lg:w-1/3 mt-4 w-full">
          <button
            type="submit"
            className="text-white   bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-5 py-2.5"
          >
            {response.Isloading ? <Loader /> : "Signup"}
          </button>
        </div>
      </form>
    </div>
  );
}
