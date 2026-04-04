import { motion } from "framer-motion";

const FutureSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-[10%] flex justify-center">
      <div className="max-w-5xl w-full">

        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2x rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="/build.png"
            alt="Future"
            className="w-full h-100 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 h-30 flex items-center top-70 justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-semibold">
              Building the Future
            </h1>
          </div>
        </motion.div>

        {/* Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl shadow-md p-6 md:p-8 text-center text-text leading-relaxed"
        >
          <p className="mb-4 px-[10%] text-left">
            As Velstra Holdings continues to expand its investment footprint, we
            remain focused on developing businesses that deliver long-term value
            to stakeholders while contributing positively to society.
          </p>

          <p className="px-[10%] text-left">
            Through strategic partnerships, responsible investment, and visionary
            leadership, Velstra is building a portfolio of companies positioned
            to shape the future of industry and enterprise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;