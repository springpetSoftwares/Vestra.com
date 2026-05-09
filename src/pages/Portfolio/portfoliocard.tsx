import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiSkipLeftLine, RiSkipRightLine } from "react-icons/ri";

type Slide = {
  image: string;
  title: string;
  description: string;
  url: string;
};

type PortfolioItem = {
  title: string;
  image: string;
  description: string;
  url: string;
  logo: string;
  slides?: Slide[];
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Springpet Homes",
    image: "/lekkiapartment.jpg",
    description:
      "Velstra is actively engaged in high-value real estate developments that combine quality, functionality, and long-term returns for investors and communities.",
    url: "https://springpethomes.com/",
    logo: "/springpethomes.png",

      slides: [
    {
      image: "/lekkiapartment.jpg",
      title: "Springpet Homes",
      description:
        "Velstra is actively engaged in high-value real estate developments that combine quality, functionality, and long-term returns for investors and communities.",
      url: "https://springpethomes.com/",
    },

    {
      image: "/lekkiapartment.jpg",
      title: "The Vista Residence ",
      description:
        "Where Elegance Meets Comfort The Vista Residence is a perfect blend of modern luxury, style, and serene living. Delivered in just 8 months, this masterpiece reflects our commitment to quality, excellence, and timely delivery. Designed for those who appreciate comfort and sophistication, every detail speaks of class, durability, and timeless beauty. Whether for living or investment, The Vista Residence offers a lifestyle of convenience, prestige, and lasting value. Strategically located in Olokonla, behind Lagos Business School, Lekki, Lagos, it stands in one of the most promising and accessible locations for smart homeowners and investors.",
      url: "https://springpethomes.com/",
    },

    {
      image: "/slide3.jpg",
      title: "Modern Living",
      description:
        "Beautiful residential spaces created for comfort, elegance, and sustainable urban living.",
      url: "https://springpethomes.com/",
    },
  ],
  },
  {
    title: "Spring26 Construction",
    image: "/portfolio2.png",
    // date: "APRIL 23",
    // tag: "INDUSTRY / OUTDOORS",
    description:
      "Our construction-focused projects support infrastructure growth through durable, efficient, and strategically planned developments across key sectors.",
    url: "https://spring26construction.com/",
    logo: "/construction.png",
  },
  {
    title: "Velstra Finance",
    image: "/portfolio3.jpg",
    // date: "APRIL 23",
    // tag: "INDUSTRY / OUTDOORS",
    description:
      "We support financial initiatives and investment structures that strengthen businesses, improve resilience, and create sustainable long-term value.",
    url: "https://example.com/finance",
    logo: "/vestrafinance.png",
  },
];

const PortfolioBody = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = selectedItem?.slides?.[currentSlide];
  return (
    <section className="w-full bg-plainground py-16 px-[10%]">
      <div className="mx-auto space-y-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            onClick={() => {
            setSelectedItem(item);
            setCurrentSlide(0);
            }}
            className="relative overflow-hidden cursor-pointer group rounded"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute left-4 px-5 bottom-8 flex items-center gap-2 md:gap-3">
               <img
                src={item.logo}
                alt={item.title}
                className="w-15 h-15 md:w-30 md:h-30 object-contain rounded-full p-1 text-deep-blue bg-deep-blue/30 backdrop-blur shadow-md"
              />
              <h1 className="text-white text-xl md:text-4xl leading-none">
                {item.title}
              </h1>
            </div>

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white text-xl flex items-center justify-center hover:bg-black/70 transition">
            <RiSkipRightLine />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
  {selectedItem && (
    <motion.div
      onClick={() => setSelectedItem(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 py-8"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl relative"
      >
        {/* IMAGE */}
        <div className="relative">
          <img
            src={activeSlide?.image || selectedItem.image}
            alt={activeSlide?.title || selectedItem.title}
            className="w-full h-65 md:h-105 object-cover transition-all duration-500"
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white text-xl flex items-center justify-center hover:bg-black/70 transition"
          >
            ×
          </button>

          {/* DOTS */}
          {selectedItem.slides && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {selectedItem.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <button
  onClick={() =>
    setCurrentSlide((prev) =>
      prev === 0
        ? (selectedItem.slides?.length || 1) - 1
        : prev - 1
    )
  }
  className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-deep-blue text-white flex items-center justify-center backdrop-blur-md shadow-lg hover:scale-110 transition-all duration-300"
>
  <RiSkipLeftLine size={20} />
</button>

<button
  onClick={() =>
    setCurrentSlide((prev) =>
      prev === (selectedItem.slides?.length || 1) - 1
        ? 0
        : prev + 1
    )
  }
  className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-deep-blue text-white flex items-center justify-center backdrop-blur-md shadow-lg hover:scale-110 transition-all duration-300"
>
  <RiSkipRightLine size={20} />
</button>

        {/* CONTENT */}
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-4xl text-deep-blue font-semibold mb-4">
            {activeSlide?.title || selectedItem.title}
          </h1>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            {activeSlide?.description || selectedItem.description}
          </p>

          <a
            href={activeSlide?.url || selectedItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-deep-blue text-white px-6 py-3 rounded-md text-sm hover:opacity-90 transition"
          >
            Read More
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default PortfolioBody;