// src/pages/AboutPage.jsx
import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";
import LeadershipSection from "../components/LeadershipSection";
import Certifications from "../components/Certifications";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";


const AboutPage = () => {
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

  return (
    <div className="font-dm text-black bg-white min-h-screen flex flex-col">
      <header>
        <Navbar  />
      </header>
      <main className="grow pt-24 ">
        <div className="xl:max-w-[80%] max-w-4xl mx-auto sm:px-12 sm:pb-0 sm:pt-0 p-4 ">
        <section className="flex flex-col  mx-auto md:pt-12 md:px-12 pb-6 xl:pt-16 text-center xl:gap-y-9 gap-y-6">
                  <section className=" mx-auto  text-center">


          {/* Avatar */}
          <motion.div
            className="md:w-54 xl:w-80 xl:h-80 md:h-54 w-[150px] h-[150px] mx-auto  rounded-full overflow-hidden border-2 border-gray-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/profile.jpg"
              alt="Amir Al-Ward"
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.target.src = "https://placehold.co/128/333333/ffffff?text=AA")
              }
            />
          </motion.div>
          </section>
        <section className="flex flex-col text-center pb-10 gap-y-8">
        <section className="flex flex-col text-center gap-y-2">

     {/* Title */}
<motion.h1
  className="text-[32px] md:text-5xl lg:text-5xl xl:text-6xl font-medium leading-none "
  style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  Amir Alward
</motion.h1>

{/* Description */}
<motion.div
  className=" text-[#666666] font-light "
  style={{ fontFamily: 'DM Sans, DM Sans Placeholder, sans-serif' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  {activeBreakpoint === "mobile" ? (
    <p className="text-base">
      Mechatronics Engineer Developed and delivered advanced engineering solutions including a 6-DOF robotic arm, fully automated smart incubation systems, automated rainwater platforms, and microcontroller-driven test platforms. Proficient in MATLAB, Simulink, SolidWorks, and firmware development, with a strong focus on creating efficient, innovative, and cost-optimized mechatronic systems.
    </p>
  ) : (
    <>
      <p className="text-base">
        Mechatronics Engineer with expertise in robotics, embedded systems, and IoT automation. Skilled in robotic integration, kinematic pipelines, real-time control, and full-stack embedded development.
      </p>
      <p className="text-base ">
        Developed and delivered advanced engineering solutions including a 6-DOF robotic arm, fully automated smart incubation systems, automated rainwater platforms, and microcontroller-driven test platforms. Proficient in MATLAB, Simulink, SolidWorks, and firmware development, with a strong focus on creating efficient, innovative, and cost-optimized mechatronic systems.
      </p>
    </>
  )}
  
</motion.div>
</section>
{/* Buttons */}
<motion.div
  className="flex  justify-center gap-3 "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  <Button href="https://linkedin.com/in/amir-alward">
    LinkedIn
  </Button>
  <Button 
    href="https://drive.google.com/file/d/1FV_yt9UrYyPi0ZI3ZcPlv2vmAPgNVZYp/view?usp=drive_link"
    target="_blank"
  >
    Resume
  </Button>
</motion.div>


          {/* ---------------- RESUME SECTION ---------------- */}
          

        </section>
                  </section>

        <ResumeSection />
        </div>
      </main>

      <ExperienceSection />
      <LeadershipSection />
      <Certifications />
      <ContactSection />


      <Footer />
    </div>
  );
};

export default AboutPage;
