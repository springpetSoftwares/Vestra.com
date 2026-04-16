import { motion, useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { Leaf, Users, BriefcaseBusiness } from "lucide-react";
import Greener from "./greener";
import Commitment from "./commitment";
import Card from "./card";


const esgData = [
  {
    title: "Environmental Responsibility",
    subtitle: "Creating Developments that Respect Nature",
    points: [
      "Tree planting programs",
      "Green spaces in developments",
      "Sustainable construction practices",
      "Proper drainage & environmental management",
    ],
    buttons:"learn More",
    route: "/enviromental",
    icon: Leaf,
  },
  {
    title: "Social Impact",
    subtitle: "Empowering People & Communities",
    points: [
      "Women in leadership initiatives",
      "Inclusive workplace culture",
      "Community development programs",
      "Health, safety & wellness initiatives",
    ],
    buttons:"learn More",
    route: "/social",
    icon: Users,
  },
  {
    title: "Community Development",
    subtitle: "Empowering People & Communities",
    points: [
      "Developing safe, liveable, and well-planned environments",
      "Supporting initiatives that promote health, safety, and environmental awareness",
      " Contributing to long-term community wellbeing through responsible development",
    ],
    icon: Users,
    buttons:"learn More",
    route: "/community",
  },
  {
    title: "Governance",
    subtitle: "Structure, Accountability & Integrity",
    points: [
      "Strong leadership structure",
      "Financial discipline & control",
      "Ethical business practices",
      "Performance-driven culture",
    ],
     buttons:"learn More",
    route: "/governance",
    icon: BriefcaseBusiness,
  },
];

export default function StrategySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        ref={ref}
        className="w-full bg-background px-[10%] py-20"
      >
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-playfair text-[34px] font-semibold leading-tight text-[#111827] md:text-[52px]">
              Our Approach to Sustainability
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-[#6b7280] md:text-sm">
              At Velstra Holdings Limited, sustainability is embedded in our
              business philosophy. We are committed to creating long-term value
              by integrating Environmental, Social, and Governance (ESG)
              principles into how we develop, operate, and lead.
            </p>
          </motion.div>

          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex justify-center"
          >
            <div className="relative w-full max-w-5xl bg-plainground px-6 py-8 md:px-10 md:py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute bottom-3 right-3 h-75 w-75 bg-primary md:bottom-2 md:right-10 md:h-130 md:w-200"
              />

              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="relative z-10 mx-auto w-full"
              >
                <img
                  src="/esg1.jpg"
                  alt="Sustainability initiative"
                  className="h-80 w-80 object-cover md:h-150 md:w-4xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ESG cards */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-4"
          >
            {esgData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex py-5 gap-3">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-[#eeeeee] text-[#111827]">
                    <Icon size={16} />
                  </div>

                  <h3 className="font-playfair text-lg font-semibold leading-snug text-[#111827]">
                    {item.title}
                  </h3>
                  </div>

                  <p className="mt-3 text-sm font-playfair font-medium leading-6 text-[#374151]">
                    {item.subtitle}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm font-400 leading-6 text-[#6b7280]">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[#6b7280]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to={item.route}>
                  <button className="mt-3 bg-primary w-full text-white text-xs px-4 py-4 rounded-md font-medium hover:bg-primary/90 transition">
                    <span>{item.buttons}</span>
                  </button>
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Greener />
      <Card />
      <Commitment />
    </>
  );
}