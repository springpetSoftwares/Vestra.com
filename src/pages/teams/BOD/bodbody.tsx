import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Kenneth Reginald",
    role: "C.E.O",
    image: "/ceo.jpg",
    description:
      "Provides strategic leadership and guides the company’s long-term investment direction.",
  },
  {
    name: "Dr. Jonathan Ikeolumba FCCA",
    role: "Board Of Director",
    image: "/bod1.jpeg",
    description:
      "A seasoned finance professional with extensive experience in financial management, investment strategy, and corporate governance, he brings strong expertise in driving financial performance and ensuring fiscal discipline across the organization. He has a proven ability to structure complex transactions, optimize capital allocation, and support sustainable business growth. With a deep understanding of the real estate sector and project financing, he plays a critical role in overseeing financial planning, risk management, and funding strategies. His approach combines analytical precision with strategic insight, enabling the company to make sound financial decisions and maintain strong investor confidence. He is committed to transparency, accountability, and value creation, contributing significantly to the company’s long-term financial stability and expansion objectives.",
  },
  {
    name: "Martina Etoma Odey",
    role: "Board Member",
    image: "/bod2.jpeg",
    description:
      "Martina Etoma Odey is a seasoned professional in the hospitality industry with a strong track record of excellence in service delivery, operations management, and customer experience. With years of hands-on experience, she has developed deep expertise in managing hospitality ventures, driving business growth, and maintaining high standards in guest relations. Her strategic insight into service-oriented businesses brings valuable perspective to the Board, particularly in areas of customer satisfaction, brand positioning, and operational efficiency. Martina is known for her attention to detail, leadership capability, and commitment to delivering premium experiences. As a Board Member, she contributes to the company’s vision by leveraging her industry knowledge to support sustainable growth and service excellence.",
  },
  {
    name: "Juliet kenneth-Reginald",
    role: "Board Member",
    image: "/bod3.jpeg",
    description:
      "Supports governance, compliance, and strategic oversight across business operations.",
  },
  // {
  //   name: "Daniel Cole",
  //   role: "Investment Lead",
  //   image: "/leader5.jpg",
  //   description:
  //     "Evaluates investment opportunities and ensures strong financial and operational outcomes.",
  // },
  // {
  //   name: "James Hill",
  //   role: "Operations Head",
  //   image: "/leader6.png",
  //   description:
  //     "Coordinates operational systems and drives execution excellence across the organization.",
  // },
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
            Board Of Directors
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1f2937]">
            Strategic Oversight & Governance
          </h1>
         <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
            Strategic oversight and governance guiding Velstra's long-term vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
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
                  className="w-full h-70 md:h-100 object-cover transition duration-500 group-hover:scale-[1.03]"
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