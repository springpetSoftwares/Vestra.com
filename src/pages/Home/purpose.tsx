import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-plainground flex items-center justify-center px-[10%] py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - CARD */}
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs text-primary font-700 tracking-widest"
          >
            Our Purpose
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-4xl font-playfair font-bold text-gray-900 leading-tight"
          >
            Shaping Businesses That  <br /> Stand the Test of Time
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#4F565E] font-inter text-sm leading-relaxed"
          >
            We exist to build enduring institutions—companies that not only achieve commercial success but also contribute meaningfully to economic development and community advancement.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#4F565E] font-inter text-sm leading-relaxed"
          >
            By providing strategic leadership, capital support, and institutional structure, Velstra enables its portfolio companies to scale responsibly while maintaining the highest standards of professionalism and accountability.
          </motion.p>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          className="relative z-10 w-full h-80 rounded-sm overflow-visible shadow-xl"
        >
            <img
            src="/purpose.jpg"
            alt="about"
            className="w-full h-full object-cover rounded-md"
          />
          {/* floating small block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="absolute -bottom-5 -right-7 w-25 h-25 bg-primary/20 -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}