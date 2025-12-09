// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProjectTitleBlock({ title, link, year }) {
  return (
    <section className="text-center flex flex-col w-full leading-none items-center gap-4">
      {/* Project Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-medium leading-none"
        style={{ fontFamily: "DM Sans, sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h1>

      <div className="text-center flex flex-col w-full font-dm items-center gap-5">
      {/* Year label and number */}
      {year && (
        <motion.div
          className="flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-black text-[12px]  tracking-wide">
            Year
          </span>
          <span className="text-black text-[18px] font-dm font-normal">
            {year}
          </span>
        </motion.div>
      )}

      {/* Button */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-animated"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Open Report
      </motion.a>
      </div>
    </section>
  );
}
