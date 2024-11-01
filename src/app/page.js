"use client";
import HomeComponent from "./components/Home"; 
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="overflow-x-auto scrollbar-none flex flex-col bg-[#121212]  ">
      <Toaster/>
              <Navbar />
              <div
  className="w-full h-auto lg:h-[100vh] flex flex-col items-center bg-[#dfe9f0]"
  style={{
    backgroundImage: "url('/images/home.jpg')",
    backgroundSize: 'cover', // Cover the full screen on small and medium
    backgroundPosition: 'center', // Center the image on small and medium
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Apply conditional background styles for lg screens and above */}
  <style jsx>{`
    @media (min-width: 1024px) {
      div {
        background-size: contain; /* Keep aspect ratio on larger screens */
        background-position: right center; /* Position on the right side */
      }
    }
  `}</style>
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