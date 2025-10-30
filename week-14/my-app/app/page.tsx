import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello From <Link href={"/auth"}>Signin</Link>{" "}
    </div>
  );
}
