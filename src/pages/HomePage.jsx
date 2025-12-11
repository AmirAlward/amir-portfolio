import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import incubator from "./../assets/incubator2.jpg";
import robot from "./../assets/robotCard.webp";
import rainwaterSystem from "./../assets/ARWHS/Rainwater-Harvesting-System.jpg";

const HomePage = () => {
  const [activeBreakpoint, setActiveBreakpoint] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setActiveBreakpoint("desktop");
      else if (window.innerWidth >= 810) setActiveBreakpoint("tablet");
      else setActiveBreakpoint("mobile");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  // Reusable Button
  const Button = ({ children, href, variant = "primary", icon: Icon, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex w-[139px] sm:w-fit justify-center  px-4 py-2 rounded-xl font-light space-x-2 transition-all ${
        variant === "primary"
          ? "bg-[#262626] text-white hover:bg-[#666666]"
          : "bg-gray-100 text-black hover:bg-gray-200"
      }`}
      style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </a>
  );

  const projects = [
    {
      title: "IoT Egg Incubator",
      desc: "PID-controlled smart incubation with remote monitoring",
      year: "2025",
      image: incubator,
      route: "/projects/iot-egg-incubator",
    },
      {
    title: "6-DOF Robotic Arm",
    desc: "Kinematic modeling & real-time control using STM32 and ROS",
    year: "2024",
    image: robot,
    route: "/projects/industrial-robot-arm", // <-- updated
  },
    
    {
  title: "Smart Rainwater System",
  desc: "Automated harvesting, filtration, and usage analytics",
  year: "2023",
  image: rainwaterSystem, // imported image
  route: "/projects/arwhs", // route to the ARWHS page
},

  ];

  return (
    <div className="font-dm text-black bg-white min-h-screen flex flex-col"
      style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
>
      <header>
        <Navbar  />
      </header>
      <main className="grow pt-24 xl:pt-30 ">
        <div className="xl:max-w-[80%] max-w-4xl mx-auto sm:px-12 sm:pb-12 sm:pt-0 p-4 ">
          {/* HERO SECTION */}
          <section className="text-center flex grow flex-col py-0 md:pt-6 gap-y-4 md:gap-y-6">
            <div className="justify-center flex w-full">
            <motion.div
              className="w-30 h-30  rounded-full overflow-hidden border-2 border-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/profile.jpg"
                alt="Amir Al-Ward"
                className="w-full h-full object-cover"
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/128/333333/ffffff?text=AA")
                }
              />
            </motion.div>
            </div>

            <div className="justify-center px-4 md:px-0 text-center flex w-full">

            <motion.h1
              className="text-[32px] md:text-5xl xl:text-6xl  font-medium leading-none "
              style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Mechatronics Engineer Focused on Robotic Systems and Intelligent Automation

            </motion.h1>
            </div>

            <div className="justify-center px-4 md:px-0 flex w-full">

            <motion.div
              className="md:max-w-[60%] max-w-xl mx-auto text-sm font-light text-[#666666] "
              style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {activeBreakpoint === "mobile" ? (
                <p className="text-base">
Mechatronics Engineering graduate,
focused on robotics systems, control,
embedded systems,
and intelligent automation.                </p>
              ) : (
                <>
                  <p className="text-base">
                    Mechatronics Engineer specializing in advanced robotic systems, automation, and intelligent control. Currently developing high-precision robotic manipulators, embedded systems, and full-stack mechatronic solutions integrating MATLAB/Simulink, SolidWorks, and real-time microcontroller platforms
                  </p>
                  <p className="text-base mt-3">
                    Graduated with a Bachelor Degree in Mechatronics Engineering, combining mechanical design, electronics, and software automation into cohesive, production-ready systems.
                  </p>
                </>
              )}
            </motion.div>
            </div>

            <div className="justify-center px-4 md:px-0  flex w-full">

            <motion.div
              className="flex flex-wrap justify-center gap-3 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button href="https://linkedin.com/in/amir-alward">LinkedIn</Button>
              <Button href="/resume.pdf">Resume</Button>
            </motion.div>

            </div>

            <div className="justify-center px-4 md:px-0 flex w-full">

            <motion.h2
              className="text-[28px] md:text-3xl leading-tight xl:text-5xl font-medium"
              style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Click project photos below to learn more!
            </motion.h2>
            </div>
            
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * (index + 3) }}
      whileHover={{ y: -4 }}
      className="w-full "  // <— updated width
    >
      <Link to={project.route} className="block w-full">
        <div className="bg-white rounded-md overflow-hidden shadow-none space-y-3 hover:shadow-md transition">
          
          {/* Image */}
          <div className="aspect-square rounded-md h-auto max-h-375 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="px-4 xl:py-4">
            <div className="flex justify-between items-start">
              <h3
                className="text-xl font-medium"
                style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
              >
                {project.title}
              </h3>

              <span
                className="text-lg xl:mt-2 text-black"
                style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
              >
                {project.year}
              </span>
            </div>

            <p
              className=" text-sm w-[85%]  text-start text-gray-600"
              style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
            >
              {project.desc}
            </p>
          </div>

        </div>
      </Link>
    </motion.div>
  ))}
</div>


          </section>

          {/* PROJECTS GRID */}
 
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
