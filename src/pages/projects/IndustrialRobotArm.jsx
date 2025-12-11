// src/pages/projects/IndustrialRobotArm.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectTitleBlock from "../../components/ProjectTitleBlock.jsx";


// Assets
const robot = "/amir-portfolio/videos/robot-arm.mp4";


import forward from "../../assets/robot/robotFKine.png";
import Robot3DHero from "../../components/Robot3DHero";
import inverseK from "../../assets/robot/robotInKine.png";
import workS from "../../assets/robot/D-plot-of-arm-workspace.png";
import Dyna from "../../assets/robot/robotDyna.png";
import first from "../../assets/robot/first.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const MediaItem = ({ src, type, caption }) => (
  <motion.figure
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex max-w-3xl flex-col items-center w-full"
  >
    {type === "image" && (
      <img
        src={src}
        alt={caption}
        className="w-full max-w-3xl h-auto rounded-md object-contain"
        loading="lazy"
      />
    )}
    {type === "video" && (
  <video
    src={src}
    controls
    autoPlay
    loop
    muted
    playsInline
    className="w-full max-w-3xl h-auto rounded-md"
    preload="metadata"
  />
)}

    {caption && (
      <figcaption className="mt-2 text-gray-600 text-sm text-center max-w-full">
        {caption}
      </figcaption>
    )}
  </motion.figure>
);

// DM Sans font
const DMSansFont = () => (
  <style jsx global>{`
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dmsans/v16/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2)
        format('woff2');
    }
    body {
      font-family: 'DM Sans', sans-serif;
    }
  `}</style>
);

export default function IndustrialRobotArm() {
  return (
        <div className="font-dm text-black bg-white min-h-screen flex flex-col">
      <header>
        <Navbar  />
      </header>
      <main className="grow pt-24 xl:pt-35 ">
        <div className="xl:w-[90%] max-w-3xl lg:w-4xl mx-auto sm:px-12 sm:pb-12 sm:pt-0 p-4 ">
          <section className="text-center flex flex-col items-center gap-6 ">

  {/* HERO */}
  <section className=" text-center flex flex-col w-full leading-none items-center gap-6 sm:gap-8">

    {/* Project Title */}
      <motion.h1
        className="text-3xl md:text-5xl xl:text-6xl w-full font-medium leading-none"
        style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        6-DOF Yaskawa Robotic Arm
      </motion.h1>

<section className="flex grow w-full items-center gap-4 
                    flex-col sm:flex-row sm:justify-evenly">
        <div className="text-center flex flex-col w-full max-w-40 font-dm items-center gap-5">
      {/* Role and number */}
      
        <motion.div
          className="flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-black text-[12px]  tracking-wide">
            Role
          </span>
          <span className="text-black sm:text-[18px] text-[16px] font-dm font-normal">
            Lead Robo-Mechatronics Eng
          </span>
        </motion.div>
      
      </div>

      <div className="text-center flex flex-col w-full max-w-40 font-dm items-center gap-5">
      {/* Year label and number */}
      
        <motion.div
          className="flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-black text-[12px]  tracking-wide">
            Year
          </span>
          <span className="text-black sm:text-[18px] text-[16px] font-dm font-normal">
            2024
          </span>
        </motion.div>
      
      </div>
 

      {/* Button */}
      <motion.a
        href="https://drive.google.com/file/d/1REK0npMA8TtYetUWmbZRgTuIqNN_Mi_U/view?usp="
        target="_blank"
        rel="noopener noreferrer"
        className="btn-animated"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Open Report
      </motion.a>
     

            </section>

      </section>

              {/* CHALLENGE */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            6-DOF Robotic Arm Overview
          </motion.h3>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
            IThe 6-DOF Industrial Robotic Arm project delivers a full software-defined manipulation system modeled after modern factory robots. The arm was designed in SolidWorks, exported into MATLAB, and fully controlled through custom forward and inverse kinematics. A dedicated App Designer interface provides joint-space and Cartesian control, trajectory planning, and real-time 3D animation.
This project demonstrates complete mastery of robotic modeling, workspace analysis, and kinematic algorithms—entirely in simulation, without the need for a physical prototype.
          </motion.p>
        </section>

        {/* video */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            Video Demonstration
          </motion.h3>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
            Watch the 6-DOF GP25 robotic arm perform a complete pick-and-place operation in MATLAB. The simulation demonstrates real-time forward and inverse kinematics, trajectory execution, and precise block manipulation using the custom control interface.
             </motion.p>
        </section>

        <MediaItem
            src= {robot}
            type="video"
            caption=""
          />

            {/* CAD & 3D Model */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            Isometric View
            </motion.h3>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
            The GP25 robotic arm was fully modeled in SolidWorks, capturing all six joints, mechanical linkages, and end-effector components. The CAD model was exported to MATLAB for kinematic simulations, trajectory planning, and real-time 3D visualization. This digital twin allows interactive exploration of joint motions, workspace analysis, and collision detection. </motion.p>
        </section>

        <MediaItem
              src={first}
              type="image"
              caption="Imported SolidWorks model"
            />

          {/*3D Model */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            3D Robot Visualization
          </motion.h3>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
            The full 6-DOF GP25 robotic arm is rendered in an interactive 3D viewer. Users can rotate, zoom, and explore the robot’s structure in real time, observing joint configurations.
             </motion.p>
        </section>
      
        {/* 3D HERO MODEL */}
          <motion.div className="max-w-3xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
          >
            <Robot3DHero />
          </motion.div>

          {/* Kinematics */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            Kinematics & Motion Control
          </motion.h3>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
            The robotic arm’s motion is governed by a complete set of forward and inverse kinematics equations, allowing precise positioning of the end-effector in 3D space. Using MATLAB’s Robotics Toolbox, joint trajectories are computed, avoiding singularities and respecting mechanical limits. The system supports both joint-space and Cartesian-space control, enabling smooth pick-and-place operations, trajectory planning, and real-time motion simulation.
             </motion.p>
        </section>

        <MediaItem
            src={forward}
            type="image"
            caption=""
          />
          <MediaItem
            src={inverseK}
            type="image"
            caption=""
          />

          {/* Dynamics */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            Dynamics & Torque Simulation
          </motion.h3>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
            The robotic arm’s motion is further analyzed using inverse dynamics based on the Lagrange formulation. This allows precise computation of joint torques required to follow desired trajectories, accounting for inertia, Coriolis, and gravitational effects. MATLAB simulations validate torque profiles and ensure the design meets performance requirements for pick-and-place operations.The robotic arm’s motion is further analyzed using inverse dynamics based on the Lagrange formulation. This allows precise computation of joint torques required to follow desired trajectories, accounting for inertia, Coriolis, and gravitational effects. MATLAB simulations validate torque profiles and ensure the design meets performance requirements for pick-and-place operations.
            </motion.p>

            <MediaItem src={Dyna} type="image" caption="" />
        </section>

        {/* Workspace */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            Workspace Analysis
          </motion.h3>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
           The 3D reachable workspace of the GP25 arm was mapped by sampling joint angles within their limits. This analysis ensures collision-free operation, helps avoid singularities, and supports efficient trajectory planning for pick-and-place tasks.
             </motion.p>

          <MediaItem src={workS} type="image" caption="" />
        </section>

        {/* Workspace */}
  <section className="grow flex flex-col max-w-3xl text-center gap-y-4 justify-center">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[22px] font-medium leading-[1.1] text-[black] "
          >
            Future Enhancements for the 6-DOF Robotic Arm
          </motion.h3>

          
        {/* TAKEAWAYS */}
            <section className=" bg-white">
    <div className="mx-auto text-center">
      <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] text-[#666666]  "
          >
           To further advance this robot and simulation capabilities, several improvements are planned:
            </motion.p>
      <ul className="text-[16px] text-[#666666] leading-[1.9] text-center list-decimal list-inside mx-auto">
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <strong>Advanced Trajectory Planning:</strong> Implement adaptive path optimization for faster and smoother pick-and-place operations.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <strong>Force and Torque Feedback:</strong> Integrate virtual force sensors in simulation for realistic interaction with objects and improved control algorithms.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <strong>Collision Detection & Avoidance:</strong> Enhance workspace analysis with dynamic collision checking to ensure safe motion planning.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <strong>Enhanced Inverse Kinematics:</strong> Implement multiple IK solvers and redundancy resolution to improve solution robustness in complex tasks.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <strong>Interactive 3D GUI Improvements:</strong> Upgrade MATLAB App Designer interface with drag-and-drop end-effector positioning and live trajectory previews.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <strong>Integration with External Tools:</strong> Support co-simulation with Python or ROS for advanced control testing and robotics research applications.
        </motion.li>
      </ul>
    </div>
  </section>

        </section>

      

 
 


      </section>
      </div>
      </main>

      <Footer />
    </div>
  );
}
