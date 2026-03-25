import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Caleb Brown",
    role: "Founder",
    image: "/leader.png",
    description:
      "Provides strategic leadership and guides the company’s long-term investment direction.",
  },
  {
    name: "Sean Gray",
    role: "Director",
    image: "/leader6.png",
    description:
      "Oversees corporate operations, growth strategy, and portfolio execution across sectors.",
  },
  {
    name: "Eugene Oliver",
    role: "Managing Partner",
    image: "/leader4.png",
    description:
      "Leads partnerships, business development, and stakeholder engagement initiatives.",
  },
  {
    name: "Marcel Black",
    role: "Board Member",
    image: "/leader2.png",
    description:
      "Supports governance, compliance, and strategic oversight across business operations.",
  },
  {
    name: "Daniel Cole",
    role: "Investment Lead",
    image: "/leader1.png",
    description:
      "Evaluates investment opportunities and ensures strong financial and operational outcomes.",
  },
  {
    name: "James Hill",
    role: "Operations Head",
    image: "/leader3.png",
    description:
      "Coordinates operational systems and drives execution excellence across the organization.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const LeadershipGridSection = () => {
  return (
    <section className="w-full bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-primary uppercase tracking-[0.25em] mb-2">
            MANAGEMENT TEAM
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1f2937]">
            Operational Leadership
          </h1>
         <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
            Operational leadership responsible for executing Velstra's strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden bg-white shadow-sm">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-70 object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-base font-semibold text-[#1f2937]">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{leader.role}</p>

                <p className="text-sm text-gray-500 leading-relaxed mt-3 max-w-[95%]">
                  {leader.description}
                </p>

                <div className="flex items-center gap-3 mt-4 text-gray-400">
                  <Linkedin size={14} className="hover:text-gray-700 cursor-pointer transition" />
                <h3 className="hover:text-gray-700 cursor-pointer transition text-xs">View Profile</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipGridSection;