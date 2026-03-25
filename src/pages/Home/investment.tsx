import { motion } from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineHandshake } from "react-icons/md";

const data = [
  {
    title: "Strategic Sector Participation",
    desc: "Velstra focuses its investments in sectors with strong long-term fundamentals and meaningful economic impact. By identifying industries with sustainable demand and growth potential, we allocate capital to opportunities that support economic development while delivering enduring value for stakeholders.",
    icon: TbTargetArrow,
  },
  {
    title: "Strong Governance and Leadership Structure",
    desc: "Velstra works closely with experienced management teams and implements clear governance frameworks that promote accountability, transparency, and sound decision-making.",
    icon: MdVerifiedUser,
  },
  {
    title: "Disciplined Investment Strategy",
    desc: "Our investment approach prioritizes operational excellence and disciplined execution. By promoting efficient processes, responsible resource management, and strong operational oversight, Velstra ensures that its portfolio companies operate with clarity, efficiency, and long-term stability.",
    icon: IoSettingsSharp,
  },
  {
    title: "Sustainable Value Creation",
    desc: "Velstra is committed to building businesses that create lasting value over time. Our focus extends beyond short-term gains to the development of enterprises that remain competitive, resilient, and capable of delivering sustainable economic impact for years to come.",
    icon: FaArrowTrendUp,
  },
  {
    title: "Partnerships That Drive Innovation and Growth",
    desc: "We partner with visionary entrepreneurs, experienced operators, and strategic stakeholders to unlock new opportunities, drive innovation, and accelerate the growth of the businesses within our portfolio",
    icon: MdOutlineHandshake,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const PhilosophySection = () => {
  return (
    <div className="bg-plainground py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <p className="text-xs tracking-widest text-primary uppercase">
          Investment Philosophy
        </p>
        <h1 className="sm:text-2xl md:text-4xl text-deep-blue font-semibold mt-2">
          Our Investment Philosophy
        </h1>
        <p className="text-text text-sm md:px-50 mt-2">
          At Velstra Holdings, our investment strategy is guided by a long-term perspective and a commitment to responsible growth, We focus on...
        </p>
      </div>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 mb-4">
                <Icon className="text-lg text-black" />
              </div>

              {/* TITLE */}
              <h1 className="text-md text-deep-blue font-semibold mb-2">
                {item.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PhilosophySection;