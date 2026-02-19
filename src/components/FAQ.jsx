import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick, image }) => {
  return (
    <div
      className={`border border-gray-100 rounded-[24px] mb-4 overflow-hidden transition-all duration-300 ${
        isOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <button
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-base sm:text-lg md:text-xl font-medium text-gray-900 pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="text-gray-400 shrink-0" />
        ) : (
          <ChevronDown className="text-gray-400 shrink-0" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 sm:px-6 pb-6 sm:pb-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-1">
                <p className="text-gray-500 leading-relaxed text-sm sm:text-[15px]">
                  {answer}
                </p>
              </div>

              {image && (
                <div className="w-full md:w-[280px] shrink-0">
                  <img
                    src={image}
                    alt="Property interior"
                    className="w-full h-[160px] sm:h-[180px] object-cover rounded-[20px]"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of properties do you sell?",
      answer:
        "We specialize in residential, commercial, and luxury properties, offering a wide range of options to suit every buyer's needs and preferences. We connect you with trusted lenders offering competitive mortgage options and financial advice.",
      image:
        "https://www.rbfcu.org/images/default-source/hero/kup-mbye-luxrealty-q4-oct-res_art-1500x900-fin.jpg?sfvrsn=101cb2a8_4",
    },
    {
      question: "How do I know if a property is a good investment?",
      answer:
        "Our experts analyze market trends, location growth potential, and historical data to provide you with a comprehensive investment report.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    },
    {
      question: "Do I need to hire a real estate agent?",
      answer:
        "While not mandatory, having an expert by your side ensures you navigate legal complexities and negotiations smoothly.",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80",
    },
    {
      question: "What's the process for buying a property?",
      answer:
        "From initial search and viewing to pre-approval, offers, and final closing, we guide you through every milestone.",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=400&q=80",
    },
    {
      question: "Can I tour a property before purchasing?",
      answer:
        "Absolutely. We encourage private tours or virtual walkthroughs for every property.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div
      id="FAQ"
      className="bg-[#F9F9F9] w-full min-h-screen py-16 sm:py-20 px-6 md:px-12 lg:px-20 font-sans scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- FAQ Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 sm:mb-16 gap-6 sm:gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
            Frequently asked <br /> questions
          </h2>

          <p className="max-w-sm text-gray-500 text-sm sm:text-base leading-relaxed pt-2">
            Our experts guide you in making informed investment decisions 
            based on market insights.
          </p>
        </div>

        {/* --- FAQ Accordion List --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              image={faq.image}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
