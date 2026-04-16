import React from "react";
import { motion, type Variants } from "framer-motion";

type EmpoweringSectionProps = {
  leftImage?: string;
  rightImage?: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
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

const socialsbody: React.FC<EmpoweringSectionProps> = ({
  leftImage = "/social1.jpg",
  rightImage = "/social2.jpg",
}) => {
  return (
    <section className="w-full bg-background px-[10%] py-[7%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center my-10">
            <h1 className="text-primary-foreground text-2xl md:text-4xl leading-snug font-semibold">
              Empowering People.
              <br />
              Strengthening Communities
            </h1>
          </motion.div>

          {/* Top content */}
          <div className="gap-10 my-[7%]">
            {/* Image collage */}
            <div className="relative item-start mx-auto w-full max-w-150 h-250">
              <motion.div
                variants={fadeLeft}
                className="absolute left-0 top-0 w-[65%] h-[72%] overflow-hidden shadow-sm"
              >
                <img
                  src={leftImage}
                  alt="Woman speaking"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={fadeRight}
                className="absolute right-0 top-45 md:top-50 w-[60%] h-[62%] overflow-hidden shadow-sm border-10 border-[#f4f4f4]"
              >
                <img
                  src={rightImage}
                  alt="Group photograph"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Text */}
            <motion.div
              variants={textReveal}
              className="w-full text-text py-[7%] px-[10%] md:px-[20%]"
            > 
              <p className="my-5 leading-relaxed">
                At Velstra, we believe that our success is directly tied to the
                wellbeing and empowerment of people — both within and outside
                our organization.
              </p>

              <h1 className="text-2xl md:text-4xl text-deep-blue/70 leading-7 my-10">
                Women in Leadership
              </h1>

              <p className="mb-5">
                We are committed to fostering an inclusive environment where
                women are empowered to lead and thrive.  Our focus is on building a system where leadership is based on competence, opportunity, and impact.
              </p>

              <h1 className="text-2xl md:text-4xl text-deep-blue/70 leading-7 my-10">
                Our approach includes:
              </h1>

              <ul className="list-disc pl-5 space-y-3 mb-5 marker:text-[#7d7d7d]">
                <li>Promoting equal opportunities for leadership and career growth</li>
                <li>Supporting professional development and capacity building</li>
                <li>Encouraging participation in strategic decision-making</li>
                <li>
                  Maintaining a workplace culture rooted in respect, inclusion, and performance
                </li>
              </ul>

              <p className="my-10 leading-relaxed">
                Women across our organization continue to contribute meaningfully across finance, operations, project execution, and business development—strengthening our ability to deliver sustainable growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default socialsbody;