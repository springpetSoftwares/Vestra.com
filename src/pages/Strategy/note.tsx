import { motion } from "framer-motion";


export default function Strategy() {
  return (
    <>
    <section
    className="relative w-full flex items-center justify-center bg-cover py-20 px[10%]  bg-plainground">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black italic text-xl font-light leading-tight mb-6"
        >
         Our strategy ensures every investment contributes <br />
        to sustainable growth and long-term impact.
        </motion.h1>

      </div>
    </section>
    </>
  );
}