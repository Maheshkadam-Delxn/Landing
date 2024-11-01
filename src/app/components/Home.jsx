"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../../../public/assets/home.json";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div id="Home"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-start items-center w-full overflow-hidden pt-24 px-4"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-center z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,30,46,1) 0%, rgba(0,81,128,1) 91%, rgba(0,132,116,1) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <p className="text-white lg:text-transparent mr-9">Welcome To <span className="text-white">DevServe</span></p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl mb-8 text-center z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,30,46,1) 0%, rgba(0,81,128,1) 91%, rgba(0,132,116,1) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <span className="text-white lg:text-transparent">A Solution to All Your <span className="text-white">Software Problems</span></span>
        </motion.p>

        <div className="relative flex justify-center items-center w-full z-10">
          <div className="flex sm:flex-row sm:mt-8 sm:p-6 px-8 py-6 text-lg bg-black text-white rounded-full transition w-3/4 md:w-2/4 relative">
            Schedule a Meeting
            <div className="absolute right-0 transform -translate-x-5 -translate-y-5">
              <a
                href="https://calendly.com/devserve-co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="items-center px-4 py-2 mt-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                  Connect
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.h1
        className="absolute bottom-10 lg:bottom-20 text-8xl md:text-10xl lg:text-[12rem] font-bold text-red-300"
        style={{ y, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        DevServe
      </motion.h1>

      <p className="absolute bottom-2 left-4 text-white  lg:text-gray-700 text-md md:text-lg font-semibold z-10">
        Your One-Stop Solution for Apps, Web, and Desktop Development.
      </p>

      {/* Lottie animation - hidden on small and medium screens, visible on large screens */}
      <div className="hidden lg:flex absolute inset-y-0 left-0 items-center justify-center w-1/2">
        <Lottie animationData={animationData} width={250} height={250} className="w-full" />
      </div>
    </div>
  );
};

export default Home;
