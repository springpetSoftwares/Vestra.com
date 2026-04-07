import { motion } from "framer-motion";

const FutureSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-[10%] flex justify-center">
      <div className="max-w-4xl bg-plainground p-10 w-full">
        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2x rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="/esg2.jpg"
            alt="Future"
            className="w-full h-120 object-cover"
          />

           {/* Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl shadow-md p-6 md:p-8 text-center text-text leading-relaxed"
        >
         <h1 className="text-2xl md:text-5xl text-deep-blue font-semibold py-3">
          Our ESG Commitment
        </h1>

          <p className="px-[10%] py-3">
            To build a business that delivers financial returns while creating environmental value, 
            empowering people, and operating with integrity
          </p>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;