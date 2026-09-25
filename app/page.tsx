import { About } from "@/components/About";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Samples } from "@/components/Samples";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Stats />
        <Samples />
        <Brands />
        <Contact />
      </main>
    </>
  );
}
