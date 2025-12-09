import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Arwa Mineral Water Company – Shamlan Factory",
      position: "Maintenance & Production Systems Engineer Intern",
      location: "Sana'a, Ye",
      duration: "Jun 2025 – Feb 2025",
      link: "https://www.shamlan-water.com",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-6 px-4 md:py-12 md:px-8 bg-[#FAFAFA]">
      <div className=" sm:w-lg  w-full flex flex-col gap-y-8 mx-auto lg:px-0">
        <motion.h2
          className="text-[28px] md:text-4xl text-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block "
                style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}

              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.08)" }}
            >
              <div className="bg-white md:p-6 p-4 md:pt-5 rounded-lg border border-dashed border-gray-300 cursor-pointer">
                <h4 className="text-md md:text-lg font-semibold mb-1">{exp.company}</h4>
                <p className="text-gray-600 font-light text-sm mb-5">{exp.position}</p>
                <div className="flex items-center font-light text-sm text-black">
                  <span>{exp.location}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className=" text-black">{exp.duration}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
