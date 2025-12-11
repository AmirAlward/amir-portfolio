import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------------------------
   Reusable Button Component
--------------------------------------------- */
const Button = ({ children, href, variant = "primary", icon: Icon, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    className={`inline-flex items-center justify-center px-4 py-2 rounded-xl font-light text-md transition-all ${
      variant === "primary"
        ? "bg-[#262626] text-white hover:bg-[#666666]"
        : "bg-gray-100 text-black hover:bg-gray-200"
    }`}
    style={{ fontFamily: "DM Sans, DM Sans Placeholder, sans-serif" }}
  >
    {Icon && <Icon className="w-4 h-4 mr-2" />}
    {children}
  </a>
);

/* ------------------------------------------------
   Single Nav Item
------------------------------------------------ */
const NavItem = ({ to, label, isActive }) => (
  <motion.div
    whileHover="hover"
    className="relative flex flex-col items-center px-1 pt-2 cursor-pointer"
  >
    <Link to={to}>
      <span
        className="text-black text-sm font-light"
        style={{ fontFamily: "DM Sans, DM Sans Placeholder, sans-serif" }}
      >
        {label}
      </span>
    </Link>

    <motion.div
      className="h-px bg-black mt-1 w-full origin-left"
      initial={{ scaleX: isActive ? 1 : 0 }}
      animate={{ scaleX: isActive ? 1 : 0 }}
      variants={{ hover: { scaleX: 1 } }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

/* ------------------------------------------------
   NAVBAR WITH CONTACT POPUP
------------------------------------------------ */
const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Projects");
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowPopup(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (location.pathname === "/") setActiveTab("Projects");
    else if (location.pathname === "/about") setActiveTab("About");
  }, [location.pathname]);

  /* Close popup when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <header className="fixed left-1/2 top-8 xl:top-12 transform -translate-x-1/2 z-50">
      <nav
        className="flex items-center justify-center p-3 rounded-xl relative"
        data-border="true"
        style={{
          backgroundColor: "rgb(250,250,250)",
          borderRadius: "16px",
          gap: "2rem",
          flexDirection: "row",
        }}
      >
        <style >{`
          nav[data-border='true']::after {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px dashed rgb(207, 207, 207);
            border-radius: inherit;
            pointer-events: none;
          }
        `}</style>

        {/* Nav items */}
        <div className="flex items-center py-0" style={{ gap: "2rem" }}>
          <NavItem to="/" label="Projects" isActive={activeTab === "Projects"} />
          <NavItem to="/about" label="About" isActive={activeTab === "About"} />
        </div>

        {/* Contact Button */}
        <Button
          href="#"
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            setShowPopup((prev) => !prev)(!showPopup);
          }}
        >
          Contact
        </Button>

        {/* Popup Card */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 p-5 rounded-2xl shadow-xl bg-[#FAFAFA]"
              style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
            >
              <div className="flex flex-col  gap-3">
<Button href="mailto:amiralward2002@icloud.com" variant="primary">
Email
</Button>
<Button href="https://wa.me/967770445668" variant="primary">
WhatsApp
</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
