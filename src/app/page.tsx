import Header from "@/Components/layout/Header";
import Hero from "./Hero";
import Steps from "./Steps";
import About from "./about";
import Contact from "./contact";
import Footer from "@/Components/layout/Footer";
import Features from "./features";

export default function Home() {

  console.log("home")
  return (
    <div>
      <Header/>
      <div id="">
        <Hero />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="User-guide">
        <Steps />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}
