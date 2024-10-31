import Image from "next/image";
import HomeComponent from "./components/Home"; 
import Footer from "./Components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="overflow-x-auto scrollbar-none flex flex-col bg[#121212]  ">
              <Navbar />

      <div className="w-full h-[100vh] flex flex-col items-center gap-24 bg-[#dfe9f0]" style={{
        backgroundImage: "url('/images/home.jpg')",
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
        objectFit: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <HomeComponent />
      </div>
      <Services />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}