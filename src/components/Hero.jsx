import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 text-white">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-heading leading-tight max-w-3xl"
        >
          Build Your Future, One Property at a Time.
        </motion.h1>

        <p className="mt-6 max-w-xl text-lg text-gray-200">
          Own your dream property with confidence and expert guidance.
        </p>

        <div className="mt-12">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
