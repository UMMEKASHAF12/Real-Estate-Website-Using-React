import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-heading mb-12">
          What our clients say about us
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-3xl shadow-lg p-10"
        >
          <p className="text-gray-600 text-lg">
            Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded expectations.
          </p>

          <h4 className="mt-6 font-semibold">Saibur Rahman</h4>
        </motion.div>
      </div>
    </section>
  );
}
