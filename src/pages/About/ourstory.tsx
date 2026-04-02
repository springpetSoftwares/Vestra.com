import React from "react";
import { motion, type Variants } from "framer-motion";
import { Target, BarChart3, ShieldCheck, Landmark } from "lucide-react";

const storyImage = "/ceo.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft: Variants  = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight: Variants  = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const philosophyItems = [
  {
    icon: Target,
    title: "Strategic Clarity",
    text: "Every investment is guided by clear direction and long-term vision.",
  },
  {
    icon: BarChart3,
    title: "Structured Growth",
    text: "Businesses are developed through disciplined systems and scalable frameworks.",
  },
  {
    icon: ShieldCheck,
    title: "Execution & Accountability",
    text: "A culture focused on performance, ownership, and measurable outcomes.",
  },
  {
    icon: Landmark,
    title: "Long-Term Mindset",
    text: "Decisions are made with a focus on legacy, sustainability, and enduring value.",
  },
];

// function SectionLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="mb-4 inline-flex items-center gap-2">
//       <span className="h-px w-10 bg-black/30" />
//       <span className="text-xs uppercase tracking-[0.32em] text-black/50">{children}</span>
//     </div>
//   );
// }

function PhilosophyCard({
  icon: Icon,
  title,
  text,
  index,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl border border-black/10 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f7f7f6] text-black">
        <Icon size={18} strokeWidth={1.8} />
      </div>

      <h3 className="mb-3 text-[15px] font-semibold leading-snug text-[#111827] md:text-base">
        {title}
      </h3>

      <p className="text-sm leading-7 text-black/55">{text}</p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        className="mt-5 h-px bg-black/10"
      />
    </motion.div>
  );
}

export default function VelstraStoryPage() {
  return (
    <main className="w-full bg-background px-[10%] justify-center">
      <section className="relative overflow py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-black/3 blur-3xl" />
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl font-semibold tracking-tight text-[#111827] md:text-5xl"
            >
              Our Story
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-sm leading-7 text-text md:text-[15px]"
            >
              Velstra Holdings was founded with a clear vision—to build a  structured platform for creating enduring value across businesses, industries, and generations.
            </motion.p>
          </motion.div>

          <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-primary/10 backdrop-blur-sm lg:block"
              />

              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-[28px] shadow-[0_10px_50px_rgba(0,0,0,0.0)]"
              >
                <img
                  src={storyImage}
                  alt="Velstra story portrait"
                  className="h-110 w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-t from-black/15 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-xl"
            >
              {/* <motion.div variants={fadeUp}>
                <SectionLabel>The Velstra Story</SectionLabel>
              </motion.div> */}

              <motion.h1
                variants={fadeRight}
                className="text-3xl font-semibold text-deep-blue font-500 leading-tight tracking-tight md:text-4xl"
              >
                The <br className="hidden sm:block" />
                Velstra Story
              </motion.h1>

              <motion.p
                variants={fadeRight}
                className="mt-6 text-sm leading-8 text-black/60 md:text-[15px]"
              >
                Velstra Holdings Limited was founded by its CEO, Dr. Kenneth Reginald, with a bold vision to build not just successful businesses, but a structured platform that creates enduring value across generations.
              </motion.p>

              <motion.p
                variants={fadeRight}
                className="mt-5 text-sm leading-8 text-black/60 md:text-[15px]"
              >
                From the beginning, the goal was to move beyond fragmented ventures and establish a unified ecosystem where businesses are intentionally built, effectively governed, and sustainably scaled.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 lg:mt-20"
          >
            <motion.div variants={fadeUp} className="max-w-4xl">
              <h1 className="text-3xl font-500 text-deep-blue tracking-tight md:text-[2rem]">
                A Clear Vision
              </h1>
              <p className="mt-5 max-w-5xl text-sm leading-8 text-black/60 md:text-[15px]">
                To build a unified, strategic ecosystem where businesses are intentionally built, properly governed, and designed to scale with purpose.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="px-[10%] py-20">
        <div className="mx-auto max-w-6xl border-y border-black/10 py-14 lg:py-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl text-deep-blue font-500 tracking-tight md:text-4xl"
            >
              A Platform for Enduring Businesses
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm leading-8 text-text md:text-[15px]"
            >
              Driven by a deep understanding of enterprise and execution, Dr. Kenneth Reginald envisioned Velstra as more than a holding company. It is a platform for building, strengthening, and transforming businesses through clarity of purpose, disciplined leadership, and long-term thinking.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-8 text-text md:text-[15px]"
            >
              At its core is a fundamental belief—that true success is not defined by the speed of growth, but by the strength and sustainability of what is built.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="px-[10%] py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl font-500 text-deep-blue tracking-tight md:text-4xl"
            >
              Leadership Philosophy
            </motion.h1>

            <motion.div
              variants={stagger}
              className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {philosophyItems.map((item, index) => (
                <PhilosophyCard key={item.title} {...item} index={index} />
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-5xl text-sm leading-8 text-black/60 md:text-[15px]"
            >
              Velstra Holdings stands today as a reflection of this vision—growing enterprise committed to building resilient, impactful, and enduring businesses.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 max-w-3xl">
              <p className="text-md md:text-2xl font-medium leading-relaxed text-deep-blue">
                We are not just creating companies. <br />
                We are building a legacy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
