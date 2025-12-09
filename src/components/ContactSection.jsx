// src/components/ContactSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div
      className="md:py-6 md:px-12 p-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="md:text-4xl text-[28px] font-normal mb-0 md:mb-2">Want to get in touch?</h1>
      <p className="text-gray-500 mb-4 md:mb-6">
        If you have any questions, feel free to reach out!
      </p>

      <motion.a
        href="mailto:amiralward2002@icloud.com"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        className="px-4 py-2 bg-[#262626] text-white rounded-xl inline-block hover:bg-[#666666] transition-colors duration-200"
      >
        amiralward2002@icloud.com
      </motion.a>
    </motion.div>
  );
};

export default ContactSection;
