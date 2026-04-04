import { motion } from "framer-motion";
import PortfolioCard from "./portfoliocard";

// const portfolioItems = [
//   {
//     title: "Real Estate Development",
//     image: "/lekkiapartment.jpg",
//     text: "Creating residential and commercial environments designed to meet the evolving needs of modern communities. Velstra Holdings focuses on the development of thoughtfully planned properties that combine functionality, sustainability, and long-term value. From residential developments to commercial hubs, our real estate initiatives are guided by strong market insight, quality construction standards, and a commitment to creating spaces where people can live, work, and grow.",
//   },
//   {
//     title: "Construction & Infrastructure",
//     image: "/portfolio2.jpg",
//     text: "Delivering professional construction and project execution services with a focus on quality, efficiency, and innovation. Velstra Holdings supports the development of infrastructure and construction projects that meet the highest standards of safety, reliability, and performance. Through strong project management, modern construction practices, and strategic partnerships, we ensure that every project is delivered on time, within scope, and built to stand the test of time",
//   },
//   {
//     title: "Agriculture & Land Development",
//     image: "/portfolio3.jpg",
//     text: "Delivering professional construction and project execution services with a focus on quality, efficiency, and innovation. Velstra Holdings supports the development of infrastructure and construction projects that meet the highest standards of safety, reliability, and performance. Through strong project management, modern construction practices, and strategic partnerships, we ensure that every project is delivered on time, within scope, and built to stand the test of time",
//   },
//   {
//     title: "Retail & Commercial Development",
//     image: "/portfolio4.jpg",
//     text: "Developing retail and mixed-use commercial platforms that stimulate business activity and local economic growth. Velstra Holdings supports the development of modern commercial environments that bring together retail, office, and service-oriented spaces designed to meet the needs of businesses and consumers. Through strategic planning, quality development, and long-term investment, we create vibrant commercial destinations that encourage entrepreneurship, attract investment, and strengthen local economies.",
//   },
//   {
//     title: "Philanthropy & Social Impact",
//     image: "/portfolio5.jpg",
//     text: "Supporting initiatives that promote education, empowerment, and community development through strategic social investment. Velstra works with organizations and community partners to support programs that create meaningful social impact. Our philanthropic efforts focus on expanding educational opportunities, strengthening local communities, and promoting initiatives that foster long-term social and economic advancement.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

const PortfolioSection = () => {
  return (
    <section className="w-full bg-plainground py-20 px-[10%]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-deep-blue leading-tight"
        >
          A Portfolio Built for <br /> Long-Term Impact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-4 text-sm md:text-base text-text leading-relaxed"
        >
          Velstra Holdings manages a diversified portfolio of businesses across sectors essential to long-term economic development. 
          Through strategic capital allocation, governance oversight, and operational partnership, we support enterprises positioned 
          for sustainable expansion and lasting impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-4 text-sm md:text-base text-text leading-relaxed"
        >
         Our investments focus on industries that shape the built environment, strengthen economic infrastructure, and create
          opportunities for growth across communities and markets.
        </motion.p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {portfolioItems.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-[#DBDEE15E]/37 shadow-sm overflow-hidden text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-5">
                <h1 className="text-xl text-center font-semibold text-deep-blue mb-3">
                  {item.title}
                </h1>

                <p className="text-sm text-text leading-relaxed my-5">
                  {item.text}
                </p>

                <button className="bg-deep-blue/80 rounded-md text-white text-xs tracking-wide w-full p-5 uppercase hover:opacity-90 transition">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto mt-8 bg-[#DBDEE15E]/37 shadow-sm overflow-hidden text-left"
        >
          <img
            src={portfolioItems[4].image}
            alt={portfolioItems[4].title}
            className="w-full h-44 object-cover"
          />

          <div className="p-5">
            <h1 className="text-xl text-center font-semibold text-deep-blue mb-3">
              {portfolioItems[4].title}
            </h1>

            <p className="text-sm text-text leading-relaxed my-5">
              {portfolioItems[4].text}
            </p>
            <button className="bg-deep-blue/80 rounded-md text-white text-xs tracking-wide w-full p-5 uppercase hover:opacity-90 transition">
              Learn More
            </button>
          </div>
        </motion.div> */}

        <PortfolioCard />

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-black/95 text-xl font-light mb-6 max-w-2xl mx-auto mt-12  leading-relaxed"
              >
            Our portfolio reflects a commitment to building enterprises <br />
            that create lasting economic value.
              </motion.h1>
      </div>
              
    </section>
  );
};

export default PortfolioSection;