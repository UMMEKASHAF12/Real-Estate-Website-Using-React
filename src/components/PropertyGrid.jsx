import { motion } from "framer-motion";

export default function PropertyGrid() {
    const houses = [1, 2, 3, 4, 5, 6];

    return (
        <section className="py-24 bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-heading mb-12">
                    Explore our premier houses
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {houses.map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ scale: 1.04 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-md"
                        >
                            <img src={`/house${item}.jpg`} className="h-64 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="font-heading text-lg">
                                    The Pinnacle at Highland Park
                                </h3>
                                <p className="text-gray-500 mt-2">
                                    $3,576,000 · 123 Maple Street
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
