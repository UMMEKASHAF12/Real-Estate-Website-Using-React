import React from 'react';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// --- Sub-component for the Animated Counter ---
const StatItem = ({ end, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex-1 text-center py-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2 tracking-tighter">
        {inView ? <CountUp end={end} duration={2.5} separator="," /> : '0'}
        {suffix}
      </h2>
      <p className="text-gray-400 text-sm font-medium">{label}</p>
    </div>
  );
};

const RealEstateUI = () => {
  return (
    <div
      id="Stats"
      className="bg-[#F8F8F8] w-full min-h-screen px-6 md:px-12 lg:px-20 py-20 font-sans scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal text-[#1a1a1a] leading-tight tracking-tight">
            Your primary home might <br /> begin to feel left out.
          </h1>

          <div className="flex items-center gap-4 max-w-[280px]">
            <div className="relative group cursor-pointer">
              <div className="w-20 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center relative">
                <img
                  src="/herohouse.jpg"
                  className="opacity-80 object-cover w-full h-full"
                  alt="video thumb"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                    <Play size={10} fill="black" className="ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[13px] leading-snug text-gray-500">
              Each listing offers unique features, exceptional quality, and prime locations
            </p>
          </div>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Main Large Card */}
          <div className="lg:col-span-6 relative rounded-[35px] overflow-hidden">
            <img
              src="/herohouse.jpg"
              alt="Luxury Home"
              className="w-full h-[350px] sm:h-[420px] lg:h-[520px] object-cover"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-xl p-2.5 rounded-full flex -space-x-3 border border-white/20">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  alt="user"
                />
              ))}
            </div>
          </div>

          {/* Center Info Card */}
          <div className="lg:col-span-3 bg-white rounded-[35px] p-8 sm:p-10 flex flex-col justify-center items-center text-center shadow-sm border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-5 text-gray-900">
              Big things can happen in small spaces.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-[220px]">
              With thoughtful design and smart organization, you can maximize every inch.
            </p>
            <button className="px-8 py-3 rounded-full border border-gray-200 text-sm font-semibold hover:bg-gray-50 transition-all text-gray-700">
              Details
            </button>
          </div>

          {/* Small Feature Card */}
          <div className="lg:col-span-3 bg-white rounded-[35px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <img
              src="/house2.jpg"
              alt="Pricing"
              className="rounded-[25px] h-[200px] sm:h-[220px] w-full object-cover mb-6"
            />
            <div className="mt-auto px-2">
              <p className="text-gray-500 text-sm font-medium mb-4">
                Pricing Start at $256K
              </p>
              <button className="w-full bg-[#0a0a0a] text-white py-3 rounded-full flex items-center justify-center gap-2 group hover:bg-black transition-all font-medium">
                Explore Properties
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM NAV & TEXT --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-24 px-2">
          <p className="text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed text-center lg:text-left">
            Whether it's creating a cozy corner for relaxation or transforming a small area into a workspace
          </p>

          <div className="flex gap-3">
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-all shadow-sm">
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-all shadow-sm">
              <ArrowRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* --- STATS SECTION (COUNTER) --- */}
        <div className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <StatItem end={100} suffix="%" label="Satisfactions Clients" />
          <StatItem end={500} suffix="+" label="Property sells" />
          <StatItem end={150} suffix="+" label="Countries & Cities" />
          <StatItem end={2000} suffix="+" label="Positive reviews" />
        </div>

      </div>
    </div>
  );
};

export default RealEstateUI;
