import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <h1 className=" text-4xl text-green-600 font-sans">Its going to be a free and ads free movie watching site (^_^) </h1>




    </main>
  );
}
