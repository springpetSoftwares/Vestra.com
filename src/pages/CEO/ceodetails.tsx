import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const BusinessProfile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-background flex items-center justify-center px-[10%] py-20"
    >
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl"
      >
        <div>
          {/* Section */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="mb-16"
          >
            <motion.h3
              variants={itemVariant}
              className="font-playfair text-[28px] text-[#1d2430] font-semibold mb-4"
            >
              Group Structure & Business Interests
            </motion.h3>

            <motion.p
              variants={itemVariant}
              className="text-[13px] leading-7 text-[#6b7280] mb-4 font-inter"
            >
              Under Velstra Holdings, Kenneth oversees a growing portfolio of companies:
            </motion.p>

            <motion.ul
              variants={sectionVariant}
              className="text-[13px] leading-7 text-[#6b7280] space-y-3 list-disc pl-5 font-inter"
            >
              <motion.li variants={itemVariant}>
                <span className="font-semibold text-[#1d2430]">
                  Springpet Homes Limited
                </span>
                <br />
                Focused on residential estate development, delivering structured housing
                solutions that combine affordability, quality, and long-term investment value.
              </motion.li>

              <motion.li variants={itemVariant}>
                <span className="font-semibold text-[#1d2430]">
                  Spring 26 Construction
                </span>
                <br />
                Responsible for project execution, infrastructure development, and
                construction delivery across all group projects.
              </motion.li>

              <motion.li variants={itemVariant}>
                <span className="font-semibold text-[#1d2430]">
                  Velstra Finance Limited
                </span>
                <br />
                Positioned as the group’s financial arm, focused on creating
                real estate-backed financial solutions, investment vehicles, and
                structured funding models to support property development and
                wealth creation.
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Section */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="mb-16"
          >
            <motion.h3
              variants={itemVariant}
              className="font-playfair text-[28px] text-[#1d2430] font-semibold mb-4"
            >
              Leadership & Vision
            </motion.h3>

            <motion.p
              variants={itemVariant}
              className="text-[13px] leading-7 text-[#6b7280] mb-4 font-inter"
            >
              Kenneth is recognized for his execution-driven leadership style, with strong emphasis on:
            </motion.p>

            <motion.ul
              variants={sectionVariant}
              className="text-[13px] leading-7 text-[#6b7280] space-y-2 list-disc pl-5 font-inter"
            >
              <motion.li variants={itemVariant}>
                Operational structure and corporate governance
              </motion.li>
              <motion.li variants={itemVariant}>
                Efficient project delivery and cost control
              </motion.li>
              <motion.li variants={itemVariant}>
                Financial discipline and investment-driven development
              </motion.li>
            </motion.ul>

            <motion.p
              variants={itemVariant}
              className="text-[13px] leading-7 text-[#6b7280] mt-6 font-inter"
            >
              His long-term vision is to build Velstra Holdings into a fully integrated
              real estate and investment ecosystem, where development, construction,
              and financing work together to drive scale and profitability.
            </motion.p>
          </motion.div>

          {/* Section */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="mb-16"
          >
            <motion.h3
              variants={itemVariant}
              className="font-playfair text-[28px] text-[#1d2430] font-semibold mb-4"
            >
              Business Philosophy
            </motion.h3>

            <motion.p
              variants={itemVariant}
              className="text-[13px] leading-7 text-[#6b7280] mb-8 font-inter"
            >
              We don’t just build properties—we build systems, structure, and financial value that outlive individual projects.
            </motion.p>

            <motion.p
              variants={itemVariant}
              className="text-[13px] leading-7 text-[#6b7280] mb-4 font-inter"
            >
              He believes sustainable success comes from:
            </motion.p>

            <motion.ul
              variants={sectionVariant}
              className="text-[13px] leading-7 text-[#6b7280] space-y-2 list-disc pl-5 font-inter"
            >
              <motion.li variants={itemVariant}>Strong internal systems</motion.li>
              <motion.li variants={itemVariant}>Disciplined execution</motion.li>
              <motion.li variants={itemVariant}>
                Strategic control of both assets and capital
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Section */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="mb-16"
          >
            <motion.h3
              variants={itemVariant}
              className="font-playfair text-[28px] text-[#1d2430] font-semibold mb-4"
            >
              Strategic Focus Areas
            </motion.h3>

            <motion.ul
              variants={sectionVariant}
              className="text-[13px] leading-7 text-[#6b7280] space-y-2 list-disc pl-5 font-inter"
            >
              <motion.li variants={itemVariant}>
                Residential and mixed-use developments
              </motion.li>
              <motion.li variants={itemVariant}>
                Construction and infrastructure delivery
              </motion.li>
              <motion.li variants={itemVariant}>
                Real estate-backed financing and investment models
              </motion.li>
              <motion.li variants={itemVariant}>
                Group-level expansion through structured subsidiaries
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Section */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="mb-16"
          >
            <motion.h3
              variants={itemVariant}
              className="font-playfair text-[28px] text-[#1d2430] font-semibold mb-4"
            >
              Strategic Positioning
            </motion.h3>

            <motion.p
              variants={itemVariant}
              className="text-[13px] leading-7 text-[#6b7280] mb-8 font-inter"
            >
              By integrating Velstra Finance Limited into the group structure,
              Kenneth Reginald is uniquely positioned as:
            </motion.p>

            <motion.div
              variants={sectionVariant}
              className="space-y-2 text-[13px] leading-7 text-[#6b7280] font-inter mb-8"
            >
              <motion.p variants={itemVariant}>✓ A developer</motion.p>
              <motion.p variants={itemVariant}>✓ A builder</motion.p>
              <motion.p variants={itemVariant}>✓ A capital strategist</motion.p>
            </motion.div>

            <motion.p
              variants={itemVariant}
              className="text-[13px] leading-7 text-[#6b7280] font-inter"
            >
              This combination reflects a holistic approach to business—where asset creation,
              execution, and financing are all controlled within a unified system.
            </motion.p>
          </motion.div>

          <motion.div
              variants={itemVariant}
              className="mt-16 flex justify-center"
            >
              <a
                href="https://www.linkedin.com/in/kenneth-reginald/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] text-[#6b7280] hover:text-[#1d2430] transition"
              >
                {/* LinkedIn Icon */}
                <div className="w-5 h-5 rounded-full bg-[#e5e7eb] flex items-center justify-center text-[10px] font-bold text-[#6b7280]">
                  in
                </div>

                <span>Connect on LinkedIn</span>
              </a>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessProfile;