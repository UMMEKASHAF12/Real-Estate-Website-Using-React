import { motion } from "framer-motion";

export default function PropertyGrid() {
  const houses = [
    { id: 1, img: '/house1.jpg', title: 'The Pinnacle at Highland Park', price: '$3,576,000', address: '123 Maple Street' },
    { id: 2, img: '/house2.jpg', title: 'Modern Villa', price: '$2,850,000', address: '45 Oak Avenue' },
    { id: 3, img: '/house3.jpg', title: 'Luxury Estate', price: '$4,120,000', address: '78 Pine Road' },
    { id: 4, img: '/house4.jpg', title: 'Cozy Cottage', price: '$1,750,000', address: '12 Cedar Lane' },
    { id: 5, img: '/house5.jpg', title: 'Urban Loft', price: '$2,300,000', address: '99 Birch Street' },
    { id: 6, img: '/house6.jpg', title: 'Seaside Retreat', price: '$3,900,000', address: '77 Ocean Drive' }
  ];

  return (
    <section
      id="PropertyGrid"
      className="py-20 sm:py-24 bg-[#f7f7f7] scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-10 md:mb-12 text-center md:text-left">
          Explore our premier houses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {houses.map((house) => (
            <motion.div
              key={house.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={house.img}
                alt={house.title}
                className="h-56 sm:h-60 md:h-64 w-full object-cover"
              />

              <div className="p-5 md:p-6">
                <h3 className="font-heading text-base sm:text-lg md:text-xl">
                  {house.title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  {house.price} · {house.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
