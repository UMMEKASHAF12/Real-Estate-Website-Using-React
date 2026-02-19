import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <div id="Footer" className="bg-[#F9F9F9] font-sans scroll-mt-32">

      {/* --- CALL TO ACTION & FOOTER --- */}
      <footer className="bg-white pt-10 px-6 sm:px-12 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* CTA Banner */}
          <div className="relative h-[380px] sm:h-[420px] md:h-[480px] rounded-[45px] overflow-hidden flex flex-col items-center justify-center text-center group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              alt="Modern House"
            />
            <div className="relative z-10 px-4 sm:px-6">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 md:mb-8 tracking-tight">
                Ready to Make Your Dream <br /> Property a Reality?
              </h2>
              <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-10 tracking-wide">
                Explore a curated selection of properties that align with your vision and goals.
              </p>
              <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-gray-100 transition-all">
                Get Started <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="py-12 md:py-16 flex flex-col md:flex-row justify-between items-start border-b border-gray-100 mt-12 md:mt-16 gap-8 md:gap-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Discover Nature's Wonders <br /> with Expert Guidance
            </h3>
            <div className="mt-6 md:mt-0 space-y-3 text-left md:text-right">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                12345, Gazipur, Dhaka, Road. <br /> Bangladesh.
              </p>
              <p className="text-gray-900 font-bold text-lg sm:text-xl">(+1)839-849-8483</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="py-8 md:py-10 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base font-semibold text-gray-600 uppercase tracking-wider gap-4 md:gap-0">
            <div className="flex flex-wrap gap-6 md:gap-8 mb-6 md:mb-0">
              <a href="#Hero" className="hover:text-black transition-colors">Home</a>
              <a href="#Stats" className="hover:text-black transition-colors">About</a>
              <a href="#PropertyGrid" className="hover:text-black transition-colors">Properties</a>
              <a href="#Services" className="hover:text-black transition-colors">Services</a>
            </div>

            <div className="text-2xl font-bold text-black tracking-tighter mb-6 md:mb-0">
              EverGreen
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8">
              <a href="#Gallery" className="hover:text-black transition-colors">Gallery</a>
              <a href="#FAQ" className="hover:text-black transition-colors">FAQ</a>
              <a href="#Pricing" className="hover:text-black transition-colors">Pricing</a>
              <a href="#Footer" className="hover:text-black transition-colors">Contact</a>
            </div>
          </nav>

          {/* Copyright Bar */}
          <div className="py-6 md:py-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[13px] sm:text-sm text-gray-400 font-medium gap-4 md:gap-0">
            <p>© 2025 EverGreen. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
              <span className="text-gray-200">|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
