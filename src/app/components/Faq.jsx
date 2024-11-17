"use client";
import React, { useState } from "react";
// import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowDropDownCircle } from "react-icons/md";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-neutral-800 p-7 rounded-lg text-start font-bold shadow-md"
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white bg-gray-600 rounded-full text-3xl p-1"
        >
          {isOpen ? <MdArrowDropDownCircle /> : <MdArrowDropDownCircle />}

        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="p-5 bg-neutral-800 rounded-lg mt-2 ml-5 mr-5"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    { question: "What is DevServe?", answer: "DevServe is a software service platform." },
    {
      question: "How does DevServe benefit my business?",
      answer: "DevServe enhances business efficiency through technology.",
    },
    {
      question: "How do I get started with DevServe?",
      answer: "To get started, visit our website for registration.",
    },
    {
      question: "Is DevServe secure and reliable?",
      answer: "Yes, DevServe employs advanced security protocols.",
    },
    {
      question: "What kind of ROI can I expect from partnering with DevServe?",
      answer: "ROI can vary, influenced by your specific needs.",
    },
  ];


  return (
    <div id="FAQ" className=" mt-24 w-full h-auto flex flex-col gap-5 items-center justify-start phone:gap-5 p-10 bg-[#121212] text-white">
      <div className="flex flex-col items-center gap-3 w-full p-10 phone:p-5">
        <h1 className="text-3xl font-bold phone:text-2xl ">FAQ</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 w-3/4 phone:text-xs phone:gap-5 ">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
