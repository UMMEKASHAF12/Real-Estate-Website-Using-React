import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#Hero" },
    { label: "Explore", href: "#Stats" },
    { label: "Property", href: "#PropertyGrid" },
    { label: "Faq", href: "#FAQ" },
    { label: "Testimonials", href: "#Testimonials" },
    { label: "Contact", href: "#Footer" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-xl font-semibold text-white">EverGreen</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-green-400 transition">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-green-400 transition text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
