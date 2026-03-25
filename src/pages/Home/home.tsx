import { motion } from "framer-motion";
import heroImg from "/hero.png";
import HomeBody from "./homebody";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <>
    <section
    className="relative w-full h-screen flex items-center justify-center bg-cover pt-20 bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImg})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-deep-blue/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-lg font-500 tracking-widest mb-4"
        >
          VELSTRA HOLDINGS LIMITED
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          A Platform for Enduring <br /> Business Success
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#f8f8f8]/80 text-sm md:px-[10%] font-200 md:text-base mb-8"
        >
          Building long-term value through strategic investments,
          disciplined partnerships, and sustainable growth
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 md:gap-4"
        >
          <NavLink to="/partnerships">
          <button className="bg-primary text-deep-blue px-6 py-3 rounded-md text-sm font-medium hover:bg-primary transition">
            Partner With Us →
          </button>
          </NavLink>


          <NavLink to="/portfolio">
          <button className="bg-white/10 text-white px-6 py-3 rounded-md text-sm font-medium border border-white/20 hover:bg-white/20 transition">
            View Portfolio
          </button>
          </NavLink>
        </motion.div>
      </div>
    </section>
    <HomeBody />
    </>
  );
}