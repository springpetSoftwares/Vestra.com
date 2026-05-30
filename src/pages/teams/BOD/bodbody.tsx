import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, X } from "lucide-react";
import { useState } from "react";

const leaders = [
  {
    name: "Kenneth Reginald",
    role: "C.E.O",
    image: "/ceo.jpg",
    description:
      "Dr. Kenneth Reginald is a seasoned professional in the fields of real estate investment and business strategy, widely recognized for his dynamic leadership, strategic foresight, and unwavering commitment to excellence. With over seven years of hands-on experience, he has built a distinguished reputation as a visionary entrepreneur and trusted advisor, driving growth, innovation, and structure across Nigeria’s evolving real estate and business landscape. Through his leadership at Springpet Homes Limited and Velstra Holdings Limited, Dr. Reginald has consistently demonstrated the ability to transform vision into sustainable value — creating high-performing teams, executing impactful projects, and positioning organizations for long-term competitiveness.",
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
];

const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const LeadershipGridSection = () => {
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof leaders)[0] | null
  >(null);

  return (
    <>
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
              Strategic oversight and governance guiding Velstra's long-term
              vision.
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

                  <p className="text-sm text-gray-500 mt-1">
                    {leader.role}
                  </p>

                  {/* SHORT DESCRIPTION */}
                  <p className="text-sm text-gray-500 leading-relaxed mt-3 max-w-[95%]">
                    {leader.description.length > 110
                      ? `${leader.description.substring(0, 110)}...`
                      : leader.description}
                  </p>

                  {/* READ MORE */}
                  <button
                    onClick={() => setSelectedLeader(leader)}
                    className="text-primary text-sm mt-2 hover:opacity-80 transition"
                  >
                    Read More
                  </button>

                  <div className="flex items-center gap-3 mt-4 text-gray-400">
                    <Linkedin
                      size={14}
                      className="hover:text-gray-700 cursor-pointer transition"
                    />

                    <h3 className="hover:text-gray-700 cursor-pointer transition text-xs">
                      View Profile
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLeader(null)}
            className="fixed inset-0 bg-black/50 z-999 overflow-y-auto"
          >
            <div className="min-h-screen flex items-start justify-center px-6 py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden relative shadow-2xl"
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-4 right-4 z-20 bg-white/90 rounded-full p-2 hover:bg-white transition"
                >
                  <X size={18} />
                </button>

                {/* IMAGE */}
                <div className="w-full bg-white">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-[#1f2937]">
                    {selectedLeader.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {selectedLeader.role}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mt-5">
                    {selectedLeader.description}
                  </p>

                  <div className="flex items-center gap-3 mt-6 text-gray-400">
                    <Linkedin
                      size={16}
                      className="hover:text-gray-700 cursor-pointer transition"
                    />

                    <h3 className="hover:text-gray-700 cursor-pointer transition text-sm">
                      View Profile
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadershipGridSection;