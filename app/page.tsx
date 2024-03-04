import Navbar from "./components/Navbar"
import Anime from "./components/Anime";
import Screen from "./components/Screen";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">

      <Anime />
      <Screen />
      <Screen />
      <h1 className=" text-4xl text-green-600 font-sans">Its going to be a free and ads free movie watching site (^_^) </h1>
    </main>
  );
}
