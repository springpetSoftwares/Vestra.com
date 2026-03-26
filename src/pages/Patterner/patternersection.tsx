import { motion } from "framer-motion";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { NavLink } from "react-router-dom";



const data = [
  {
    icon: FaArrowTrendUp,
    title: "Strategic Investors",
    desc: "Velstra partners with investors seeking long-term opportunities across high-impact sectors including real estate, infrastructure, and emerging enterprises",
    des: "Our investment platform provides structured opportunities designed to generate sustainable growth and enduring value.",
  },
  {
    icon: FaHandshakeAngle,
    title: "Business Partnerships",
    desc: "We collaborate with entrepreneurs, operators, and organizations to develop and scale businesses with strong market potential.",
    des: "Through capital support, governance structures, and strategic guidance, Velstra helps transform promising ideas into successful enterprises",
  },
  {
    icon: HiBuildingOffice,
    title: "Institutional Collaborations",
    desc: "Velstra works with institutions, developers, and industry stakeholders to deliver impactful and sustainable projects.",
    des: "Our partnerships focus on creating structured platforms that deliver measurable impact and sustainable growth.",
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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const PartnerSection = () => {
  return (
    <section className="w-full bg-deep-blue py-24 px-[10%] text-center">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] tracking-[0.3em] text-primary uppercase mb-3">
            Investment Opportunities
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Partner With Velstra Holdings
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Velstra Holdings welcomes collaborative partnerships, investors,
            institutions, and strategic partners who share our commitment to
            building sustainable businesses and creating long-term economic value.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {data.map((itemData, index) => {
            const Icon = itemData.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:translate-y-1.25 transition duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-500/10 text-yellow-500 rounded-md mb-4">
                  <Icon size={18} />
                </div>

                {/* Title */}
                <h3 className="text-white font-playfair font-semibold mb-2">
                  {itemData.title}
                </h3>

                {/* Text */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {itemData.desc}
                </p>
                <p className="text-gray-400 my-2 text-sm leading-relaxed">
                  {itemData.des}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Button */}
        <NavLink to="/contact">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="bg-primary text-deep-blue text-sm px-6 py-2 rounded-md hover:bg-primary/80 transition">
            Contact us →
          </button>
        </motion.div>
        </NavLink>

      </div>
    </section>
  );
};

export default PartnerSection;