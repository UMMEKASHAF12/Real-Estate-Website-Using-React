import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sajibur Rahman",
    role: "UI UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    text: "Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded our expectations."
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    text: "The attention to detail and professional guidance throughout the process was incredible. They truly care about finding the perfect home."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div
      id="Testimonials"
      className="min-h-screen bg-white flex items-center justify-center p-6 sm:p-12 font-sans scroll-mt-32"
    >
      <div className="w-full max-w-5xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 gap-6 sm:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
            What our clients say <br /> about us
          </h2>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 15}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  alt="user"
                />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-medium">
              <span className="text-gray-900 font-bold text-base sm:text-lg block">500+ Reviews</span>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              {/* Image */}
              <div className="w-full md:w-[320px] shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover rounded-[32px] shadow-sm"
                  alt="client"
                />
              </div>

              {/* Text Card */}
              <div className="flex-1 bg-[#F9F9F9] rounded-[32px] p-6 sm:p-8 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-center relative border border-gray-50">
                <Quote size={36} fill="#A3E635" className="text-[#A3E635] mb-3 rotate-180 opacity-80" />
                
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-4 sm:mb-6">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="mt-auto">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium">{testimonials[currentIndex].role}</p>
                </div>

                {/* Buttons */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <button onClick={handlePrev} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm">
                    <ArrowLeft size={16} className="text-gray-500 sm:text-gray-600" />
                  </button>
                  <button onClick={handleNext} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm">
                    <ArrowRight size={16} className="text-gray-500 sm:text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
