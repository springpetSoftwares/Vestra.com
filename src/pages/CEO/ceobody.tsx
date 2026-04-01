import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Profile from "./ceodetails"

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
    <section
      ref={ref}
      className="w-full min-h-screen bg-background flex items-center justify-center px-[10%] py-20"
    >
      <div className="max-w-3xl w-full grid md:grid-cols-2 gap-12 items-center">
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
            MEET OUR GMD
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-4xl font-playfair font-bold text-primary-foreground leading-tight"
          >
            Kenneth Reginald
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
          Kenneth Reginald is a Nigerian real estate entrepreneur and business strategist, known for building structured, scalable property developments and integrated business systems across multiple sectors.
          </motion.p>
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed mt-5"
          >
            He is the Founder and Group Managing Director of Velstra Holdings Limited, a diversified holding company with interests spanning real estate, construction, and financial services.
          </motion.p>

        </div>
      </div>
    </section>
      <Profile />
    </>
  );
}
