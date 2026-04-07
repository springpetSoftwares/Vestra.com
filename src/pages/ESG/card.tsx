import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CommitmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    "Integrating Green Spaces into Developments",
    "Responsible Construction Practices",
    "Environmental Preservation Initiatives",
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-deep-blue px-[10%] py-[4%]">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-playfair text-[38px] font-semibold leading-[1.15] text-white md:text-[56px]">
            Our Commitment to
            <br />
            the Future
          </h2>
        </motion.div>

        {/* Cards */}
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
          className="mt-12 grid gap-3 md:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{ y: -6 }}
              className="relative bg-[#142339] text-center px-10 py-7 flex items-center"
            >
              <p className="text-lg font-medium leading-8 text-white">
                {card}
              </p>

              {index !== cards.length - 1 && (
                <span className="absolute right-0 top-1/2 h-12 w-0.5 -translate-y-1/2 bg-[#cfa43a] md:block hidden" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="text-white font-playfair text-8xl leading-none">“</div>

          <p className="font-playfair text-2xl leading-[1.8] text-white">
            At Velstra, we are not just building for today,
            <br className="hidden md:block" />
            we are investing in a greener, more sustainable tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}