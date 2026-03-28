import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoPaperPlaneOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";


const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const leftItem: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const rightItem: Variants = {
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
    company: "",
    message: "",
  });
  
const formRef = useRef<HTMLFormElement | null>(null);
const [isSending, setIsSending] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
const [showError, setShowError] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  setIsSending(true);

  try {
    await emailjs.sendForm(
      "service_cqhp5lo",
      "template_soqey7y",
      formRef.current,
      "k0iXTdwaOQCqYJtYH"
    );

    await emailjs.sendForm(
      "service_cqhp5lo",
      "template_soqey7y",
      formRef.current,
      "k0iXTdwaOQCqYJtYH"
    );

    setShowSuccess(true);
    setForm({
      name: "",
      email: "",
      category: "",
      company: "",
      message: "",
    });
    formRef.current.reset();
  } catch (error) {
    console.log(error);
    setShowError(true);
  } finally {
    setIsSending(false);
  }
};

  return (
    <div className="bg-background px-[10%] py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs tracking-widest text-primary uppercase">
          Get In Touch
        </p>
        <h1 className="text-3xl md:text-4xl text-deep-blue font-semibold mt-2">
          Start a Conversation
        </h1>
        <p className="text-text px-10 text-sm mt-3">
          Whether you're exploring investment opportunities or seeking
          partnership, we’d love to hear from you.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
      >
        <motion.div variants={leftItem} className="space-y-6">
          <h2 className="text-deep-blue font-semibold text-lg">
            Contact Information
          </h2>

          <div className="flex items-center gap-4 hover:text-black transition">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
              <MdOutlineMail className="font-bold text-2xl text-deep-blue" />
            </div>
            <div>
              <p className="text-sm text-deep-blue">Email Address</p>
              <p className="text-sm text-text">
                <a href="mailto:info@velstra.com">info@velstra.com</a>
              </p>
              <p className="text-sm text-text">
                <a href="mailto:partnerships@apexcapital.com">
                  partnerships@apexcapital.com
                </a>
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps?q=One+Financial+Center+42nd+Floor+New+York+NY+10004+USA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-black transition"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
              <IoLocationOutline className="font-bold text-2xl text-deep-blue" />
            </div>
            <div>
              <p className="text-sm text-deep-blue">Location</p>
              <span className="block text-sm text-text">
                One Financial Center, 42nd Floor <br />
                New York, NY 10004, USA
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 hover:text-black transition">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
              <LuPhone className="font-bold text-2xl text-deep-blue" />
            </div>
            <div>
              <p className="text-sm text-deep-blue">Phone</p>
              <p className="text-sm text-text">
                <a href="tel:+12125550100">+1 (212) 555-0100</a>
              </p>
              <p className="text-sm text-text">
                <a href="tel:+12125550101">+1 (212) 555-0101</a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          variants={rightItem}
          onSubmit={handleSubmit}
          ref={formRef}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-deep-blue font-inter">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-white p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-deep-blue font-inter">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@company.com"
                value={form.email}
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
              value={form.company}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-deep-blue font-inter">Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your investment interest or how we can help..."
              rows={4}
              onChange={handleChange}
              value={form.message}
              className="w-full border border-gray-200 p-3 bg-white rounded-md text-sm outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="bg-deep-blue text-white flex items-center px-6 py-3 rounded-md text-xs hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="text-white font-bold text-sm px-1">
                  <IoPaperPlaneOutline />
                </span>
              </>
            )}
          </button>
        </motion.form>
        {/* Pop ups */}
        <AnimatePresence>
  {showSuccess && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowSuccess(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
      >
        <div className="mb-4 text-4xl">✅</div>
        <h2 className="mb-2 text-2xl font-semibold text-deep-blue">
          Message Sent
        </h2>
        <p className="mb-6 text-sm text-gray-600">
          Your message has been sent successfully. We will get back to you soon.
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="rounded-lg bg-deep-blue px-6 py-3 text-white"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  {showError && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowError(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
      >
        <div className="mb-4 text-4xl">❌</div>
        <h2 className="mb-2 text-2xl font-semibold text-deep-blue">
          Message Failed
        </h2>
        <p className="mb-6 text-sm text-gray-600">
          Something went wrong while sending your message. Please try again.
        </p>
        <button
          onClick={() => setShowError(false)}
          className="rounded-lg bg-deep-blue px-6 py-3 text-white"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactSection;