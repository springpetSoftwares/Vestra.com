import { motion } from "framer-motion";
import ceoImg from "/ceobg.jpg";
import Work from "../teams/ourteams/work";
import Ceobody from "./ceobody";

export default function Strategy() {
  return (
    <>
    <section
    className="relative w-full min-h-screen flex items-center justify-center bg-cover pt-20 bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${ceoImg})` }}
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
          The CEO
        </motion.h1>

      </div>
    </section>
    <Ceobody />
    <Work />
    </>
  );
}