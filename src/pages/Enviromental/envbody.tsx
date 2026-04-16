import React from "react";
import { motion, type Variants } from "framer-motion";

type DevelopmentSectionProps = {
  images?: string[];
};

const defaultImages = [
  "/env1.jpg", 
  "/env2.jpg", 
  "/env3.jpg"
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textReveal: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const envbody: React.FC<DevelopmentSectionProps> = ({
  images = defaultImages,
}) => {
  return (
    <section className="w-full bg-plainground px-[10%] py-[7%] overflow-hidden">
      <motion.div
        className="max-w-8xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center my-10">
          <h1 className="text-primary-foreground text-2xl md:text-4xl leading-snug font-semibold">
            Creating Developments
            <br />
            that Respect Nature
          </h1>
        </motion.div>

        {/* Content */}
        <div className="gap-10 my-[7%]">
          <motion.div
            variants={containerVariants}
            className="w-full"
          >
            <div className="grid grid-cols-2 gap-2 w-full">
              <motion.div
                variants={imageReveal}
                className="h-62.5 sm:h-75 overflow-hidden"
              >
                <img
                  src={images[0]}
                  alt="Development image 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={imageReveal}
                className="h-62.5 sm:h-75 overflow-hidden"
              >
                <img
                  src={images[1]}
                  alt="Development image 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={imageReveal}
                className="col-span-2 h-100 overflow-hidden"
              >
                <img
                  src={images[2]}
                  alt="Development image 3"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={textReveal}
        className="w-full text-text py-[7%] px-[10%] md:px-[20%]"
      >
        <p className="my-5 leading-relaxed">
          We recognize the role real estate plays in shaping the environment. As such, we are committed to reducing our environmental footprint while enhancing the natural ecosystem around our developments.
        </p>

        <h1 className="text-2xl md:text-4xl text-deep-blue/70 leading-7 my-10">
          Our environmental initiatives include:
        </h1>

        <ul className="space-y-4 text-sm sm:text-[15px] leading-7 list-disc pl-5 marker:text-[#7A7A7A]">
          <li>
            Tree Planting Program to promote greener surroundings and
            improve air quality
          </li>
          <li>
            Integration of green spaces across our estates and developments
          </li>
          <li> 
            Environmentally conscious construction practices and material
            sourcing
          </li>
          <li>
            Proper drainage and site management (including desilting systems) to prevent flooding and environmental degradation
          </li>
        </ul>

        <p className="my-10 leading-relaxed">
          Through these efforts, we are not just building structures—we are developing sustainable environments designed for long-term living.
        </p>
      </motion.div>
    </section>
  );
};

export default envbody;