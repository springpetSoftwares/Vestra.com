import { motion } from "framer-motion";
import heroImg from "/aboutbg2.jpg";
import Approach from "./approach"

export default function Hero() {
  return (
    <>
    <section
    className="relative w-full min-h-screen flex items-center justify-center bg-cover pt-20 bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImg})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-deep-blue/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
     {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Sustainability & ESG
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#f8f8f8]/80 text-sm px-[12%] md:px-[10%] font-200 md:text-base mb-8"
        >
          Building responsibly, growing sustainably, 
          and leading with integrity
        </motion.p>  
      </div>
    </section>
    <Approach />
    </>
  );
}