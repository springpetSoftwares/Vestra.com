import { motion, type Variants } from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";


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
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 120,
      damping: 12,
    },
  },
};

const StrategySection = () => {
  return (
    <>
    <div className="bg-background py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10 bg-background">
        <h1 className="text-3xl md:text-5xl text-deep-blue font-semibold my-5">
          Our Approach to Sustainability
        </h1>
        
        <p className="text-text text-sm md:px-50 my-6">
         At Velstra Holdings Limited, sustainability is embedded in our business philosophy. 
We are committed to creating long-term value by integrating Environmental, Social, 
and Governance (ESG) principles into how we develop, operate, and lead.
        </p>
      </div>

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
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 mb-4">
                <Icon className="text-lg text-black" />
              </div>

              <h1 className="text-md text-deep-blue font-semibold mb-2">
                {item.title}
              </h1>

              <p className="text-xs text-text leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
    </>
  );
};

export default StrategySection;