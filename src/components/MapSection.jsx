import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* --- MAP SIDE --- */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 h-[400px] md:h-[500px]"
          >
            {/* Map Background (Styled to match the light grey/green map aesthetic) */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale-[0.2]"
              style={{ 
                backgroundImage: `url('https://cdn.prod.website-files.com/63ea0ace3a093c508a981d83/663e037d47834b25a179ff8d_dubai%20Stat%20Global.webp')`,
                // Alternative: Use a high-res static map texture if no token
                backgroundColor: '#e5e7eb' 
              }}
            >
                {/* Fallback pattern if API is missing */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>

            {/* --- CUSTOM DREAM HOME MARKER --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              {/* Green Outer Ring */}
              <div className="w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center animate-pulse">
                 {/* White Inner Circle with Icon */}
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#A3E635]">
                    <div className="text-red-500">
                        <Home size={20} fill="currentColor" />
                    </div>
                 </div>
              </div>
              {/* Pointer Triangle */}
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white -mt-1 shadow-sm" />
              
              {/* Dream Home Label */}
              <div className="mt-3 bg-[#A3E635] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="font-semibold text-sm whitespace-nowrap">Dream Home 😋</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative Floating Dots/Icons to match image feel */}
          <div className="absolute top-10 left-10 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md animate-bounce" />
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-md" />
        </div>

        {/* --- CONTENT SIDE --- */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-medium text-gray-900 leading-[1.1] tracking-tight mb-6">
              Discover Properties with <br /> the Best Value
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10">
              From minimalist interiors to compact solutions, small spaces inspire big 
              ideas, proving that you don't need much room.
            </p>
            
            <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 group hover:bg-gray-800 transition-all font-medium">
              Find Nearest Properties
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MapSection;