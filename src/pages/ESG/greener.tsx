import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className="w-full bg-[#f3f3f3] px-[8%] py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-4xl items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-90"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-[46px] leading-[1.15] font-semibold text-deep-blue md:text-[58px]"
          >
            Planting
            <br />
            for a
            <br />
            Greener
            <br />
            Tomorrow
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="mt-6 text-[13px] leading-7 text-[#7d838c]"
          >
            <p>
              <span className="float-left mr-2 text-deep-blue font-playfair text-[48px] leading-[0.9]">
                A
              </span>
              t Velstra Holdings, sustainability is not an afterthought—it is a
              core part of how we build, grow, and invest.
            </p>

            <p className="mt-4 font-600 text-deep-blue">This initiative focuses on:</p>

            <ul className="mt-3 font-400 space-y-2 pl-4">
              <li>• Enhancing environmental quality</li>
              <li>• Promoting cleaner air and healthier living spaces</li>
              <li>• Supporting long-term ecological balance</li>
              <li>• Creating greener  </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full bg-plainground p-8">
            {/* top-left block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="absolute left-5 top-3 md:left-11 md:top-3 h-16 w-16 md:h-16 md:w-16 bg-primary"
            />

            {/* bottom-right block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="absolute bottom-4 right-6 md:right-12 md:bottom-3 h-16 w-16 bg-primary"
            />

            {/* image frame */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="relative mx-auto w-full max-w-82.5 overflow-hidden"
            >
              <img
                src="/greener.jpg"
                alt="Planting for a greener tomorrow"
                className="h-125 w-full object-cover md:h-140"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}