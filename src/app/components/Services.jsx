"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion ,useAnimation} from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { TbBrandReactNative ,TbBrandNextjs,TbBrandVercel} from "react-icons/tb";
import { LuFigma} from "react-icons/lu";
import { IoLogoElectron } from "react-icons/io5";
import {BiLogoMongodb} from "react-icons/bi"
import { MdOutlineHealthAndSafety,MdOutlineRealEstateAgent } from "react-icons/md"
import { LiaMoneyBillWaveAltSolid,LiaLuggageCartSolid } from "react-icons/lia";
import { PiBooksDuotone } from "react-icons/pi";
const servicesData = [
  {
    id:1,
    title: "Web Development",
    description: "Building responsive, user-friendly websites that meet your business needs. Our team ensures high performance, SEO optimization, and the latest web technologies to give you a robust online presence."
  },
  {
    id:2,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications that deliver a seamless experience across devices. We develop apps with rich features, user-friendly interfaces, and high security to engage your audience effectively."
  },
  {
    id:3,
    title: "UI/UX Design",
    description: "Providing intuitive and aesthetically pleasing designs that enhance user satisfaction and engagement. Our designers focus on creating interfaces that are both functional and visually appealing."
  },
  {
    id:4,
    title: "Cloud Solutions",
    description: "Offering scalable cloud solutions to improve your business operations. From cloud migration to integration, we help you optimize resources and secure data with top cloud providers like AWS, Azure, and Google Cloud."
  },
  {
    id:5,
    title: "E-Commerce Solutions",
    description: "Developing end-to-end e-commerce platforms to help you expand your business online. We offer customized solutions, secure payment gateways, and optimized product catalogs for maximum user engagement."
  },
  {
    id:6,
    title: "DevOps Services",
    description: "Automating software deployment, improving scalability, and reducing time-to-market. Our DevOps team uses modern tools and practices to streamline your operations and ensure continuous delivery."
  },
  {
    id:7,
    title: "Data Analytics & AI",
    description: "Leveraging data and AI to drive insights and improve decision-making. We offer solutions in predictive analytics, machine learning, and big data to help you harness the power of your data."
  },
  {
    id:8,
    title: "IT Consulting",
    description: "Providing expert guidance to optimize your IT strategy and infrastructure. Our consultants assess your needs, identify solutions, and create tailored plans to drive business growth and innovation."
  },
];
const tech = [{
  id:1,
  name : "Figma",
  logo : LuFigma 
},
{
  id:2,
  name : "React Native",
  logo : TbBrandReactNative 
},
{
  id:3,
  name : "NextJS",
  logo : TbBrandNextjs 
},{
  id:4,
  name : "ElectronJS",
  logo : IoLogoElectron 
},
{
  id:5,
  name : "Vercel",
  logo : TbBrandVercel 
},
{
  id:6,
  name : "MongoDB",
  logo : BiLogoMongodb 
},]

const industries = [{
  id:1,
  name:"E-Commerce",
  logo:LiaLuggageCartSolid
},
{
  id:2,
  name:"Healthcare",
  logo:MdOutlineHealthAndSafety
},
{
  id:3,
  name:"Finance",
  logo:LiaMoneyBillWaveAltSolid
},
{
  id:4,
  name:"Education & E-Learning",
  logo:PiBooksDuotone
},
{
  id:5,
  name:"Real Estate",
  logo:MdOutlineRealEstateAgent
},]

const Services = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Function to handle card click
  const handleExpandCard = (id) => {
    setExpandedCard(id); // Set the clicked card as expanded
  };

  const handleCollapse = () => {
    setExpandedCard(null); // Collapse the expanded card
  };
  
  return (
    // <motion.div
    //   ref={ref}
    //   className="w-full flex flex-col items-center justify-center gap-8 p-10 bg-[#F5F5F5] "
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={controls}
    //   transition={{ duration: 0.8, ease: "easeOut" }}
    // >
    //   <p className="!text-3xl font-bold mb-6 text-black">Services We Offer</p>

    //   {/* If no card is expanded, display the grid of cards */}
    //   {expandedCard === null ? (
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {servicesData.map((service) => (
    //         <motion.div
    //           key={service.id}
    //           className="flex flex-col items-center bg-slate-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           transition={{ duration: 0.3 }}
    //         >
    //           <Image
    //             src={service.image}
    //             alt={service.title}
    //             width={64}
    //             height={64}
    //             className="mb-4"
    //           />
    //           <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
    //           <p className="text-base text-center text-gray-700 mb-4">
    //             {service.description}
    //           </p>
    //           <motion.button
    //             className="px-8 py-3 text-white bg-gray-800 rounded-full hover:bg-gray-700 flex items-center gap-2"
    //             whileHover={{ scale: 1.1 }}
    //             onClick={() => handleExpandCard(service.id)} // Set this card as expanded
    //           >
    //             Explore Now
    //             <span className="ml-2">→</span>
    //           </motion.button>
    //         </motion.div>
    //       ))}
    //     </div>
    //   ) : (
    //     // If a card is expanded, show the expanded view
    //     <motion.div
    //       className="flex flex-col items-center bg-slate-200 p-10 rounded-lg shadow-xl w-full"
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       <Image
    //         src={servicesData[expandedCard - 1].image}
    //         alt={servicesData[expandedCard - 1].title}
    //         width={128}
    //         height={128}
    //         className="mb-4"
    //       />
    //       <h3 className="text-3xl font-semibold mb-4">
    //         {servicesData[expandedCard - 1].title}
    //       </h3>
    //       <p className="text-lg text-center text-gray-700 mb-6">
    //         {servicesData[expandedCard - 1].description}
    //       </p>

    //       {/* Collapse button */}
    //       <motion.button
    //         className="px-8 py-3 text-white bg-red-500 rounded-full hover:bg-red-600"
    //         whileHover={{ scale: 1.1 }}
    //         onClick={handleCollapse}
    //       >
    //         Collapse
    //       </motion.button>
    //     </motion.div>
    //   )}
    // </motion.div>
    <div className="w-full h-auto bg-[#121212] flex flex-col items-center gap-10 p-10">
     <div className="flex flex-col items-center justify-center gap-10"> <h1 className="text-2xl font-extrabold ">Services</h1>
      <div className="flex flex-wrap w-full gap-5 items-center justify-center">
  {servicesData?.map((service) => (
    <div key={service.id} className="shadow-sm shadow-neutral-600 p-5 w-full md:w-1/3 rounded-lg h-48 bg-neutral-800 flex flex-col items-start justify-between">
      <FaCode className="text-3xl" />
      <h1 className="text-xl font-bold">{service.title}</h1>
      <p className="text-sm font-normal text-neutral-400">{service.description}</p>
    </div>
  ))}
</div></div>

  <div className="w-full flex flex-col items-center justify-center gap-10">
  <h1 className="text-2xl font-extrabold">Technologies</h1>
  <div className="w-full flex items-center justify-center gap-5">
  {tech?.map((tech) => (
    <div key={tech.id} className="bg-neutral-800 p-7 rounded-lg w-48 flex items-center gap-3 justify-center ">
      <tech.logo className="text-2xl font-extrabold"/> 
     <h1 className="font-normal text-neutral-300">{tech.name}</h1>
    </div>
  ))}
  </div>
  </div>
  <div className="w-full flex flex-col items-center justify-center gap-10">
  <h1 className="text-2xl font-extrabold">Industries</h1>
  <div className="w-full flex items-center justify-center gap-5">
  {industries?.map((industry) => (
    <div key={industry.id} className="bg-neutral-800 p-7 rounded-lg w-72 flex items-center gap-3 justify-center ">
      <industry.logo className="text-2xl font-extrabold"/> 
     <h1 className="font-normal text-neutral-300">{industry.name}</h1>
    </div>
  ))}
  </div>
  </div>
  </div>
  
  );
};

export default Services;
