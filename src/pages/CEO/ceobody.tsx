import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
    <section
      ref={ref}
      className="w-full min-h-screen bg-background flex items-center justify-center px-[10%] py-20"
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - CARD */}
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
          className="relative z-10 w-full h-100 bg-white overflow-visible shadow-xl rounded-sm"
        >
          <img
            src="/ceo.jpg"
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

        {/* RIGHT SIDE - TEXT */}
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs text-primary font-700 tracking-widest"
          >
            CHIEF EXECUTIVE OFFICER
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-4xl font-playfair font-bold text-primary-foreground leading-tight"
          >
            Jason C. Ronaldo
          </motion.h2>

             <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-text font-inter text-xs leading-relaxed"
          >
            Chief Executive Officer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed"
          >
              A seasoned business leader with over two decades of experience building and scaling enterprises across real estate, infrastructure, and strategic. 
          </motion.p>
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed"
          >
            Jason brings exceptional strategic vision and operational expertise to Velstra Holdings, overseeing the company's portfolio growth and long-term value creation initiatives.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="flex gap-10 pt-4"
          >
            {["N0B+", "20+", "10+"].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-center"
              >
                <p className="text-xl font-bold text-gray-900">{item}</p>
                <p className="text-xs text-gray-500">Label</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
