import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const leaders = [
  {
    name: "Kenneth Reginald",
    role: "Group Managing Director",
    image: "/ceo.jpg",
    description:
      "A Message from the Group Managing Director Dear Esteemed Clients, Partners, Investors, and Visitors, Welcome to Velstra Holdings. At Velstra Holdings, we are driven by a clear vision — to build a dynamic and forward-thinking organization founded on excellence, integrity, innovation, and sustainable growth. As a diversified enterprise, we remain committed to delivering exceptional value through strategic leadership, strong partnerships, and a relentless pursuit of quality across all our operations. In today’s rapidly evolving business environment, we recognize that success is defined not only by achievements, but by the impact we create, the trust we uphold, and the relationships we build. Our continued growth is a reflection of the confidence placed in us by our clients, partners, investors, and dedicated team. As Group Managing Director, I am proud to lead an organization that embraces innovation, professionalism, and collaboration as the foundation for long-term success. Together, we will continue to explore new opportunities, overcome challenges with resilience, and position Velstra Holdings as a respected leader within the global business landscape. Thank you for visiting our platform and for your interest in Velstra Holdings. We look forward to building a prosperous future together. Warm regards, Dr Kenneth Reginald Group Managing Director Velstra Holdings.",
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

  const ceo = leaders[0];
  const boardMembers = leaders.slice(1);

  return (
    <>
      <section className="w-full bg-[#f4f4f4] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
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

          {/* CEO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-6 items-center mb-24"
          >
            {/* IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="overflow-hidden bg-white shadow-sm">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-80 md:w-105 md:h-200 object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-xs text-primary uppercase tracking-[0.2em] mb-2">
                Welcome Address
              </p>

              <h1 className="text-2xl md:text-4xl leading-none font-semibold text-black max-w-xl">
                A Message from the Group Managing Director
              </h1>

              <div className="text-sm text-text leading-relaxed mt-4 max-w-xl space-y-5">
                <p>
                  Dear Esteemed Clients, Partners, Investors, and Visitors,
                </p>

                <p>Welcome to Velstra Holdings.</p>

                <p>
                  At Velstra Holdings, we are driven by a clear vision — to
                  build a dynamic and forward-thinking organization founded on
                  excellence, integrity, innovation, and sustainable growth.
                </p>

                <p>
                  As a diversified enterprise, we remain committed to delivering
                  exceptional value through strategic leadership, strong
                  partnerships, and a relentless pursuit of quality across all
                  our operations.
                </p>

                <p>
                  In today’s rapidly evolving business environment, we recognize
                  that success is defined not only by achievements, but by the
                  impact we create, the trust we uphold, and the relationships
                  we build.
                </p>

                <p>
                  Our continued growth is a reflection of the confidence placed
                  in us by our clients, partners, investors, and dedicated team.
                </p>
              </div>

              <button
                onClick={() => setSelectedLeader(ceo)}
                className="text-primary text-sm mt-3 hover:opacity-80 transition"
              >
                Read Full Message
              </button>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  Dr Kenneth Reginald
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Group Managing Director
                </p>

                <p className="text-sm text-gray-500">
                  Velstra Holdings
                </p>
              </div>
              
              <NavLink to="/ceo">
              <button
                onClick={() => setSelectedLeader(ceo)}
                className="mt-8 bg-primary-foreground hover:bg-primary transition-all duration-300 text-white px-7 py-4 text-xs uppercase tracking-[0.2em]"
              >
                About The CEO
              </button>
              </NavLink>
            </div>
          </motion.div>

          {/* OTHER CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {boardMembers.map((leader, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group ${
                  boardMembers.length === 3 && index === 2
                    ? "sm:col-span-2 lg:col-span-1 sm:flex sm:justify-center"
                    : ""
                }`}
              >
                <div className="max-w-sm">
                  <div className="overflow-hidden bg-white shadow-sm">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-80 md:h-96 object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-base font-semibold text-[#1f2937]">
                      {leader.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {leader.role}
                    </p>

                    <p className="text-sm text-gray-500 leading-relaxed mt-3 max-w-[95%]">
                      {leader.description.length > 110
                        ? `${leader.description.substring(0, 110)}...`
                        : leader.description}
                    </p>

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