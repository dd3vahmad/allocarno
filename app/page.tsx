import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col text-black gradient-bg items-center py-10 px-10 md:px-24">
      <Navbar />
      <Hero />
    </main>
  );
}
