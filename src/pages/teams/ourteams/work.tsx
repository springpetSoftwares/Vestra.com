import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


export default function Strategy() {
  return (
    <>
    <section
    className="relative w-full flex items-center justify-center py-20 px-[10%] bg-deep-blue">

        {/* Main Heading */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h1 className="text-3xl md:text-4xl font-semibold text-white">
                    Work With Our Leadership
                </h1>
               <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
                  Velstra Holdings collaborates with investors, institutions, and partners to build enduring
                    enterprises that create long-term economic value.
                </p>
                 {/* Button */}
                      <NavLink to="/contact">
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                          className="mt-12"
                        >
                          <button className="bg-primary text-white text-sm px-6 py-2 rounded-md hover:bg-primary/80 transition">
                            Contact us 
                          </button>
                        </motion.div>
                       </NavLink>
              </motion.div>
    </section>
    </>
  );
}