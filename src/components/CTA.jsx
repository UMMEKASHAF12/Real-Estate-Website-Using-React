import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 text-white">
      <img
        src="/cta.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-5xl font-heading">
          Ready to Make Your Dream Property a Reality?
        </h2>
        <button className="mt-8 bg-white text-black px-8 py-3 rounded-full">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
