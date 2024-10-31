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
    id: 1,
    title: "Web Development",
    description: "Crafting responsive, user-focused websites that fulfill business needs. Our team ensures fast performance, SEO readiness, and the latest technologies to establish a solid digital presence."
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Creating cross-platform apps that work flawlessly on any device. We prioritize features, intuitive interfaces, and security, ensuring an engaging, consistent experience for all users."
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Delivering intuitive, visually appealing designs that boost user engagement and satisfaction. Our team blends functionality and aesthetics to create interfaces that offer great usability."
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Offering scalable cloud services to streamline business operations. From migration to integration, we help optimize resources and secure data with trusted providers like AWS, Azure, and Google Cloud."
  },
  {
    id: 5,
    title: "E-Commerce Solutions",
    description: "Developing tailored e-commerce platforms to expand your online business. We offer seamless payment integration, customizable features, and optimized catalogs to boost user engagement."
  },
  {
    id: 6,
    title: "DevOps Services",
    description: "Accelerating deployment with modern DevOps tools to enhance scalability. Our solutions focus on automation, reducing time-to-market, and ensuring seamless delivery for efficient operations."
  },
  {
    id: 7,
    title: "Data Analytics & AI",
    description: "Using data and AI to empower your business with insights. Our services in analytics, machine learning, and big data help unlock valuable information for informed decisions."
  },
  {
    id: 8,
    title: "IT Consulting",
    description: "Guiding your IT strategy and infrastructure for business growth. We assess needs, recommend solutions, and develop customized plans to optimize resources and drive innovation."
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
  name:"E-Learning",
  logo:PiBooksDuotone
},
{
  id:5,
  name:"Real Estate",
  logo:MdOutlineRealEstateAgent
},]

const Services = () => {
  return (
    <div className="w-full h-auto bg-[#121212] flex flex-col items-center gap-10 p-5 sm:p-10">
      {/* Services Section */}
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-xl sm:text-2xl font-extrabold text-white">Services</h1>
        <div className="flex flex-wrap w-full gap-5 items-center justify-center">
          {servicesData?.map((service) => (
            <div
              key={service.id}
              className="shadow-sm shadow-neutral-600 p-8  w-full  md:w-1/3 rounded-lg h-auto bg-neutral-800 flex flex-col items-start justify-between"
            >
              <FaCode className="text-2xl md:text-3xl" />
              <h1 className="text-lg md:text-xl font-bold text-white">{service.title}</h1>
              <p className="text-sm text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-xl sm:text-2xl font-extrabold text-white">Technologies</h1>
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          {tech?.map((tech) => (
            <div
              key={tech.id}
              className="bg-neutral-800 p-5 rounded-lg flex items-center gap-3 justify-center 
                         w-full sm:w-60 lg:w-48"
            >
              <tech.logo className="text-xl sm:text-2xl font-extrabold text-white" />
              <h1 className="font-normal text-neutral-300 text-base">{tech.name}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-xl sm:text-2xl font-extrabold text-white">Industries</h1>
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          {industries?.map((industry) => (
            <div
              key={industry.id}
              className="bg-neutral-800 p-5 rounded-lg flex items-center gap-3 justify-center 
                         w-full sm:w-60 lg:w-72"
            >
              <industry.logo className="text-xl sm:text-2xl font-extrabold text-white" />
              <h1 className="font-normal text-neutral-300 text-base">{industry.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;



