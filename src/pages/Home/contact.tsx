import { motion } from "framer-motion";
import { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Replace with EmailJS or backend later
    console.log(form);
    alert("Message sent!");
  };

  return (
    <div className="bg-background px-[10%] py-20">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs tracking-widest text-primary uppercase">
          Get In Touch
        </p>
        <h1 className="text-3xl md:text-4xl text-deep-blue font-semibold mt-2">
          Start a Conversation
        </h1>
        <p className="text-text px-10 text-sm mt-3">
          Whether you're exploring investment opportunities or seeking partnership,
          we’d love to hear from you.
        </p>
      </div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
      >
        {/* LEFT: CONTACT INFO */}
        <motion.div variants={leftItem} className="space-y-6">
          <h2 className="text-deep-blue font-semibold text-lg">
            Contact Information
          </h2>

          {/* EMAIL */}
          <a
            className="flex items-center gap-4 hover:text-black transition"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
              <MdOutlineMail className="font-bold text-2xl text-deep-blue"/>
            </div>
            <div>
              <p className="text-sm text-deep-blue">Email Address</p>
              <p className="text-sm text-text"><a href="mailto:info@velstra.com">info@velstra.com</a></p>
              <p className="text-sm text-text"><a href="mailto:partnerships@apexcapital.com">partnerships@apexcapital.com</a></p>
            </div>
          </a>

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps?q=Abuja+Nigeria"
            target="_blank"
            className="flex items-center gap-4 hover:text-black transition"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
              <IoLocationOutline className="font-bold text-2xl text-deep-blue"/>
            </div>
            <div>
              <p className="text-sm text-deep-blue">Location</p>
                <a
                href="https://www.google.com/maps?q=One+Financial+Center+42nd+Floor+New+York+NY+10004+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-texttransition"
                >
                One Financial Center, 42nd Floor <br />
                New York, NY 10004, USA
                </a>
            </div>
          </a>

          {/* PHONE */}
          <a
            className="flex items-center gap-4 hover:text-black transition"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
              <LuPhone className="font-bold text-2xl text-deep-blue"/>
            </div>
            <div>
              <p className="text-sm text-deep-blue">Phone</p>
              <p className="text-sm text-text"> <a href="tel:+1 (212) 555-0100">+1 (212) 555-0100</a></p>
              <p className="text-sm text-text"> <a href="tel:+1 (212) 555-0101">+1 (212) 555-0101</a></p>
            </div>
          </a>
        </motion.div>

        {/* RIGHT: FORM */}
       {/* RIGHT: FORM */}
<motion.form
  variants={rightItem}
  onSubmit={handleSubmit}
  className="space-y-4"
>
  <div className="grid sm:grid-cols-2 gap-4">
    
    <div className="flex flex-col gap-1">
      <label className="text-xs text-deep-blue font-inter">Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="John Smith"
        onChange={handleChange}
        className="w-full border border-gray-200 bg-white p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary"
        required
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-xs text-deep-blue font-inter">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="email@company.com"
        onChange={handleChange}
        className="w-full border border-gray-200 bg-white p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary"
        required
      />
    </div>

  </div>

    <div className="flex flex-col gap-1">
    <label className="text-xs text-deep-blue font-inter">Company</label>
    <input
      type="text"
      name="company"
      placeholder="Your Company Name"
      onChange={handleChange}
      className="w-full border border-gray-200 bg-white p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary"
    />
    </div>

    <div className="flex flex-col gap-1">
    <label className="text-xs text-deep-blue font-inter">Message</label>
    <textarea
      name="message"
      placeholder="Tell Us about your investment intrest or how we can help..."
      rows={4}
      onChange={handleChange}
      className="w-full border border-gray-200 p-3 bg-white rounded-md text-sm outline-none focus:ring-2 focus:ring-primary"
      required
    />
    </div>

    <button className="bg-deep-blue text-white flex px-6 py-3 rounded-md text-xs hover:opacity-90 transition">
    Send Message{" "}
    <span className="text-white font-bold text-sm px-1">
      <IoPaperPlaneOutline />
    </span>
    </button>
    </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactSection;