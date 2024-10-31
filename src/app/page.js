import HomeComponent from "./components/Home"; 
import Footer from "./Components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="overflow-x-auto scrollbar-none flex flex-col bg[#121212]  ">
      <Toaster/>
              <Navbar />

      <div className="w-full h-auto  lg:h[100vh] flex flex-col items-center gap-24 bg-[#dfe9f0]" style={{
        backgroundImage: "url('/images/home.jpg')",
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
        objectFit: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <HomeComponent />
      </div>
      <Services />
      <About/>
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}