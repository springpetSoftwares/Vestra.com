import { motion } from "framer-motion";
import { Lightbulb, Leaf } from "lucide-react";
import { FiAward } from "react-icons/fi";
import { MdOutlineHandshake } from "react-icons/md";

const principles = [
  {
    icon: MdOutlineHandshake,
    title: "Trust",
    desc: "We build lasting relationships through transparency, integrity, and unwavering commitment to our partners.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace forward-thinking solutions and technology to stay ahead in a rapidly evolving market.",
  },
  {
    icon: FiAward,
    title: "Excellence",
    desc: "We pursue the highest standards in every endeavor, from our strategy to execution.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We integrate environmental and social responsibility into our long-term philosophy.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const PrinciplesSection = () => {
  return (
    <section className="w-full bg-background py-20 px-[10%] text-center">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-widest text-primary uppercase mb-2">
            Core Values
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-deep-blue">
            Principles That Guide Us
          </h1>

          <p className="text-text mt-2 max-w-xl mx-auto text-sm">
            Our core values define who we are and how we operate across all our
            investment principles.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12"
        >
          {principles.map((itemData, index) => {
            const Icon = itemData.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground/40 mb-4">
                  <Icon className="w-5 h-5 font-bold text-deep-blue" />
                </div>

                <h3 className="font-semibold text-deep-blue font-playfair mb-2">
                  {itemData.title}
                </h3>

                <p className="text-sm text-text leading-relaxed">
                  {itemData.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PrinciplesSection;