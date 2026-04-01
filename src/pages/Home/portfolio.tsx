import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";


const cards = [
  {
    id: 1,
    title: "Real Estate Development",
    image: "/lekkiapartment.jpg",
  },
  {
    id: 2,
    title: "Construction",
    image: "/portfolio2.jpg",
  },
  {
    id: 3,
    title: "Finanace",
    image: "/portfolio3.jpg",
  },
];


export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-gray-100 justify-center px-6 md:px-16 py-20"
    >
        {/* RIGHT SIDE - TEXT (CENTERED LIKE HERO) */}
        <div className="md:col-span-2 flex flex-col items-center text-center space-y-6 mt-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs text-primary tracking-widest"
          >
            Our Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-deep-blue font-playfair leading-tight"
          >
            A Portfolio Built for Long-Term Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed max-w-3xl"
          >
            Velstra Holdings manages a growing ecosystem of businesses across sectors critical to long-term economic development. 
            Through strategic capital, disciplined governance, and operational guidance, we cultivate enterprises positioned for sustainable 
            growth and enduring impact.
          </motion.p>
        </div> 

      <div className="bg-gray-100 py-10 px-6 relative justify-center items-center">
      <div className="max-w-3xl text-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
          >
            {/* IMAGE WRAPPER */}
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-70 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-lg text-left font-semibold leading-tight">
                {card.title}
              </h1>

              <NavLink to="/portfolio">
              <button className="mt-3 bg-primary w-full text-deep-blue text-xs px-4 py-4 rounded-md font-medium hover:bg-yellow-600 transition">
                Learn more
              </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}