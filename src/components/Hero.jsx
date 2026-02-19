import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section id="Hero" className="relative h-screen scroll-mt-32">

      {/* Background Image */}
      <img
        src="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-32 sm:pt-40 text-white">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading leading-tight max-w-3xl"
        >
          Build Your Future, One Property at a Time.
        </motion.h1>

        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg text-gray-200">
          Own your dream property with confidence and expert guidance.
        </p>

        <div className="mt-6 sm:mt-8">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
