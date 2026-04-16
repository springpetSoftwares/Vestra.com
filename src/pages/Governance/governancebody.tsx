import React from "react";
import { motion, type Variants } from "framer-motion";

type ThrivingCommunitiesSectionProps = {
  image?: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: "easeOut", delay: 0.15 },
  },
};

const blockReveal: Variants = {
  hidden: { opacity: 0, x: 30, y: 30 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
  },
};

const Governance: React.FC<
  ThrivingCommunitiesSectionProps
> = ({ image = "/governance.jpg" }) => {
  return (
    <section className="w-full bg-background px-6 md:px-10 lg:px-20 py-16 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center py-10">
            <h1 className="text-primary-foreground text-2xl md:text-4xl leading-snug font-semibold">
              Leading with Structure, 
              <br />
              Accountability, and Integrity
            </h1>
          </motion.div>

          {/* Image area */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-6xl">
              <motion.div
                variants={imageReveal}
                className="w-full overflow-hidden"
              >
                <img
                  src={image}
                  alt="Thriving communities"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={blockReveal}
                className="absolute -bottom-15 -right-15 w-30 h-30 md:w-40 md:h-40 bg-primary"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={textReveal}
          className="w-full text-text py-[7%] px-[10%] md:px-[20%]"
        >
          <p className="my-5 leading-relaxed">
            Strong governance is the foundation of sustainable success. At Velstra, 
            we maintain a disciplined and transparent approach to leadership, 
            ensuring accountability at every level of the organization.
          </p>

          <h1 className="text-2xl md:text-4xl text-deep-blue/70 leading-7 my-10">
            Our governance framework is built on:
          </h1>

          <ul className="list-disc pl-5 space-y-3 mb-5 marker:text-[#7d7d7d]">
            <li>Clearly defined organizational structure and reporting lines</li>
            <li>Strong financial management and internal controls</li>
            <li>Ethical business practices and regulatory compliance</li>
            <li>Leadership accountability and performance-driven culture</li>
          </ul>

          <p className="my-10 leading-relaxed"> 
            We are committed to upholding the highest standards of corporate governance, positioning Velstra as a trusted, investment-ready organization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Governance;