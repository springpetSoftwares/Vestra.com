import { motion } from "framer-motion";

const LeadershipSection = () => {
  return (
    <section className="w-full bg-deep-blue py-20 px-[10%]">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Leadership & <br /> Governance
          </h1>

          <p className="text-gray-300 text-xs leading-relaxed mb-4">
           Velstra Holdings is guided by a leadership structure committed to transparency, accountability, and strategic foresight. Our management philosophy emphasizes responsible leadership, disciplined 
            decision-making, and a clear commitment to long-term value creation.
          </p>

          <p className="text-gray-300 text-xs leading-relaxed mb-4">
           Through a robust governance framework, Velstra ensures that each portfolio company operattes with strong executive oversight, sound corporate governance, and clearly defined operational leadership. 
           This structure enables our businesses to benefit from independent management while aligning with the broader strategic vision and standards established by the holding company
          </p>

          <p className="text-gray-300 text-xs leading-relaxed">
            By maintaining strong governance practices and experienced leadership, Velstra cultivates businesses that operate with professionalism, integrity, and resilience in an evolving global economy.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl opacity-40"></div>

            {/* Image Card */}
            <div className="border-2 rounded-tr-2xl rounded-tl-none rounded-br-none rounded-bl-2xl relative rounded-3xl border-white/60 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-md w-full">
              <img
                src="/leadership.png"
                alt="Leadership"
                className="w-full h-110 object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LeadershipSection;