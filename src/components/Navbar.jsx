import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-xl font-semibold text-white">EverGreen</h1>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#Hero" className="hover:text-green-400 transition">
            Home
          </a>
          <a href="#Stats" className="hover:text-green-400 transition">
            Explore
          </a>
          <a href="#PropertyGrid" className="hover:text-green-400 transition">
            Property
          </a>
          <a href="#FAQ" className="hover:text-green-400 transition">
            Faq
          </a>
          <a href="#Testimonials" className="hover:text-green-400 transition">
            Testimonials
          </a>
          <a href="#Footer" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>

        <button className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-full text-white">
          Sign Up
        </button>
      </div>
    </motion.nav>
  );
}
