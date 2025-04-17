import About from "./components/About";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col text-secondary gradient-bg items-center py-10">
      <div className="w-full px-10 md:px-24 flex min-h-screen flex-col items-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <FAQ />
    </main>
  );
}
