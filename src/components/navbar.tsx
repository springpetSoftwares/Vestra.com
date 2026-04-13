import { motion, AnimatePresence } from "framer-motion";
import Logo from "/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const teamRef = useRef<HTMLLIElement | null>(null);
  const aboutRef = useRef<HTMLLIElement | null>(null);

  const location = useLocation();

  const menuItems = [
    "Home",
    "About",
    "Portfolio",
    "Strategy",
    "Partnerships",
    "Team",
    "Contact",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (teamRef.current && !teamRef.current.contains(event.target as Node)) {
        setTeamOpen(false);
      }

      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isTeamRoute =
    location.pathname === "/ceo" ||
    location.pathname === "/bod" ||
    location.pathname === "#";

  const isAboutRoute =
    location.pathname === "/about" || location.pathname === "/esg";

  const isActiveItem = (item: string) => {
    if (item === "Home") return location.pathname === "/";
    if (item === "About") return isAboutRoute;
    if (item === "Portfolio") return location.pathname === "/portfolio";
    if (item === "Strategy") return location.pathname === "/strategy";
    if (item === "Partnerships") return location.pathname === "/partnerships";
    if (item === "Contact") return location.pathname === "/contact";
    if (item === "Team") return isTeamRoute;
    return false;
  };

  return (
    <nav className="w-full bg-white px-[10%] shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <img height={70} width={70} src={Logo} alt="hero" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={
                item === "Team"
                  ? teamRef
                  : item === "About"
                  ? aboutRef
                  : null
              }
              className={`cursor-pointer relative transition ${
                isActiveItem(item)
                  ? "text-primary"
                  : "text-deep-blue hover:text-black"
              }`}
            >
              {item === "About" ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAboutOpen((prev) => !prev);
                      setTeamOpen(false);
                    }}
                    className="flex items-center gap-1"
                  >
                    About
                    <span className="text-[10px]">▼</span>
                  </button>

                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[180%] left-1/2 -translate-x-1/2 w-40 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-6 z-50"
                      >
                        <div className="flex flex-col gap-4 text-deep-blue text-[15px] leading-snug">
                          <NavLink
                            to="/about"
                            onClick={() => setAboutOpen(false)}
                            className="hover:text-primary transition"
                          >
                            About Us
                          </NavLink>

                          <NavLink
                            to="/esg"
                            onClick={() => setAboutOpen(false)}
                            className="hover:text-primary transition"
                          >
                            ESG
                          </NavLink>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item === "Team" ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTeamOpen((prev) => !prev);
                      setAboutOpen(false);
                    }}
                    className="flex items-center gap-1"
                  >
                    Team
                    <span className="text-[10px]">▼</span>
                  </button>

                  <AnimatePresence>
                    {teamOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[180%] left-1/2 -translate-x-1/2 w-37.5 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-6 z-50"
                      >
                        <div className="flex flex-col gap-4 text-deep-blue text-[15px] leading-snug">
                          <NavLink
                            to="/ceo"
                            onClick={() => setTeamOpen(false)}
                            className="hover:text-primary transition"
                          >
                            CEO
                          </NavLink>

                          <NavLink
                            to="#"
                            onClick={() => setTeamOpen(false)}
                            className="hover:text-primary transition"
                          >
                            BOARD OF DIRECTORS
                          </NavLink>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  {item}
                </NavLink>
              )}

              {isActiveItem(item) && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <NavLink to="/partnerships">
            <button className="bg-primary-foreground text-white px-5 py-2 rounded-lg text-sm hover:bg-primary-foreground transition">
              Partner With Us
            </button>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-md px-6 py-6"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="flex flex-col items-start gap-6 text-sm font-medium"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        stiffness: 300,
                        damping: 18,
                      },
                    },
                  }}
                  className={`cursor-pointer w-full ${
                    isActiveItem(item) ? "text-primary" : "text-deep-blue"
                  }`}
                >
                  {item === "About" ? (
                    <div className="w-full">
                      <button
                        type="button"
                        onClick={() => setMobileAboutOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full"
                      >
                        <span>About</span>
                        <span className="text-[10px]">▼</span>
                      </button>

                      <AnimatePresence>
                        {mobileAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4 pt-4 flex flex-col gap-4"
                          >
                            <NavLink
                              to="/about"
                              onClick={() => {
                                setMobileAboutOpen(false);
                                setIsOpen(false);
                              }}
                              className="hover:text-primary transition"
                            >
                              About Us
                            </NavLink>

                            <NavLink
                              to="/esg"
                              onClick={() => {
                                setMobileAboutOpen(false);
                                setIsOpen(false);
                              }}
                              className="hover:text-primary transition"
                            >
                              ESG
                            </NavLink>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item === "Team" ? (
                    <div className="w-full">
                      <button
                        type="button"
                        onClick={() => setMobileTeamOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full"
                      >
                        <span>Team</span>
                        <span className="text-[10px]">▼</span>
                      </button>

                      <AnimatePresence>
                        {mobileTeamOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4 pt-4 flex flex-col gap-4"
                          >
                            <NavLink
                              to="/ceo"
                              onClick={() => {
                                setMobileTeamOpen(false);
                                setIsOpen(false);
                              }}
                              className="hover:text-primary transition"
                            >
                              CEO
                            </NavLink>

                            <NavLink
                              to="/bod"
                              onClick={() => {
                                setMobileTeamOpen(false);
                                setIsOpen(false);
                              }}
                              className="hover:text-primary transition"
                            >
                              BOARD OF DIRECTORS
                            </NavLink>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </NavLink>
                  )}
                </motion.li>
              ))}

              <NavLink to="/partnerships" onClick={() => setIsOpen(false)}>
                <motion.button
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        stiffness: 300,
                        damping: 18,
                      },
                    },
                  }}
                  className="bg-primary-foreground text-white px-5 py-2 rounded-lg text-sm"
                >
                  Partner With Us
                </motion.button>
              </NavLink>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}