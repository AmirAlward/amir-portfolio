import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LeadershipSection = () => {
  const navigate = useNavigate();

  const leadershipProjects = [
    {
      project: "IoT-Integrated Egg Incubator",
      role: "Lead Engineer — Electronics, Firmware, Mechanics, PID, UI",
      duration: "June 2024 - Present",
      route: "/projects/iot-egg-incubator",
    },
    {
  project: "6-DOF Industrial Robotic Arm",
  role: "Designed CAD model, derived DH parameters, built FK/IK & GUI",
  duration: "March 2024 - October 2024",
  route: "/projects/industrial-robot-arm",
}
,
    {
  project: "Automated Rainwater Harvesting System",
  role: "Researcher — System automation, sensing, control, documentation",
  duration: "March 2023 - Present",
  route: "/projects/arwhs",
}
,
  
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-lg mx-auto px-5 lg:px-0">
        <motion.h2
          className="md:text-4xl text-[28px] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Leadership & Projects
        </motion.h2>

        <div className="space-y-4">
          {leadershipProjects.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-[#FAFAFA] md:p-6 p-4 md:pt-5 rounded-lg border border-dashed border-gray-300 ${
                item.route ? "cursor-pointer" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.08)",
              }}
              onClick={() => {
                if (item.route) navigate(item.route);
              }}
            >
              <h4 className="text-md md:text-lg font-semibold mb-1">{item.project}</h4>
              <p className="text-gray-600 font-light text-sm mb-5">
                {item.role}
              </p>
              <div className="flex items-center font-light text-sm text-gray-500">
                <span>{item.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
