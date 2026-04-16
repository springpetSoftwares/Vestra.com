import React from "react";
import { motion } from "framer-motion";

type ThrivingCommunitiesSectionProps = {
  image?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: "easeOut", delay: 0.15 },
  },
};

const blockReveal = {
  hidden: { opacity: 0, x: 30, y: 30 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
  },
};

const community: React.FC<
  ThrivingCommunitiesSectionProps
> = ({ image = "/community.jpg" }) => {
  return (
    <section className="w-full bg-background px-6 md:px-10 lg:px-20 py-16 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center my-10">
          <h1 className="text-primary-foreground text-2xl md:text-4xl leading-snug font-semibold">
              Creating Thriving
              <br />
              Communities
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
                We are committed to creating developments that enhance the quality of life for our residents and surrounding communities.
              </p>

            <h1 className="text-2xl md:text-4xl text-deep-blue/70 leading-7 my-10">
                Our focus areas include:
              </h1>

              <ul className="list-disc pl-5 space-y-3 mb-5 marker:text-[#7d7d7d]">
                <li>Creating safe, livable, and well-planned environments</li>
                <li>Supporting initiatives that promote health, safety, and environmental awareness</li>
                <li>Contributing to long-term community wellbeing through responsible development</li>
              </ul>
            </motion.div>
      </div>
    </section>
  );
};

export default community;