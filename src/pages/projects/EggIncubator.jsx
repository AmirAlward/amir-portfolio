// src/pages/projects/EggIncubator.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectTitleBlock from "../../components/ProjectTitleBlock.jsx";
import VideoOnScroll from "../../components/layout/VideoOnScroll.jsx"; 


// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Assets
import BlockImage from "../../assets/incubator/block.png";
import heroImage from "../../assets/incubator/hero.png";
import dashboardImage from "../../assets/incubator/Dashboard.png";
import touchScreenDashboard from "../../assets/incubator/Touch_Screen_Dashboard.png";
import airFlowImage from "../../assets/incubator/air_circuilation.png";

// ----------------------
// Fade-in Component
// ----------------------
const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);




// Media Section Component
const MediaSection = ({ title, description, children }) => (
  <FadeInSection>
    <section className="text-center flex flex-col items-center  max-w-3xl gap-4 leading-none">
      {title && (
        <h3 className="text-[20px] sm:text-[22px] font-normal text-black ">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-[16px] text-[#666666] font-normal leading-[1.6] ">
          {description}
        </p>
      )}
      {children}
    </section>
  </FadeInSection>
);

// Optimized MediaItem
const MediaItem = ({ src, type, caption }) => (
  <figure className="  flex flex-col items-center w-auto">
    {type === "image" && (
      <img
        src={src}
        alt={caption}
        className="w-full max-w-3xl h-auto max-h-[750px] rounded-md object-contain"
        loading="lazy"
      />
    )}

{type === "video" && (
  <VideoOnScroll src={src} />
)}


    {caption && (
      <figcaption className="mt-2 text-gray-600 text-sm text-center max-w-full">
        {caption}
      </figcaption>
    )}
  </figure>
);


export default function EggIncubator() {
  return (
    <div className="font-dm text-black bg-white min-h-screen flex flex-col">
      <header>
        <Navbar  />
      </header>
      <main className="grow pt-24 ">
        <div className="max-w-5xl mx-auto px-7 py-6">
          <section className="text-center flex flex-col items-center gap-6 ">
       
<ProjectTitleBlock
  title="IoT Egg Incubator"
  year={2025}
  link="https://drive.google.com/file/d/1_cv9ZlaA0tNE_dr1Z98mSpkw_MBZohk2/view"
/>



        {/* Hero Section */}
       
                    <MediaSection
          title="IoT-Integrated Egg Incubator Abstract"
          description="The objective of this project was to develop a fully automated, cost-optimized egg incubator capable of precise environmental control and remote monitoring using IoT technology. The system was designed around an ESP32 microcontroller, a DS18B20 temperature sensor, a DHT22 humidity sensor, a high-power silicone heating element, and an automated egg-turning mechanism. The incubator was configured to maintain optimal conditions for up to 120 eggs, achieving rapid target temperature acquisition within 20 minutes and maintaining a precision of ±0.03 °C at the egg level. IoT integration allowed real-time monitoring and control of temperature, humidity, and egg-turning cycles through a custom user interface. Experimental trials confirmed that the incubator reliably maintains the target environmental conditions while significantly reducing manual intervention. The ultimate goal is to provide a scalable, intelligent incubation platform suitable for small-scale farms and educational purposes, enabling consistent hatching rates and operational efficiency."       />

                      <MediaItem src={heroImage} type="image" caption="Overview of the IoT Egg Incubator" />


        {/* Challenge */}
        {/* Incubator video */}
        <MediaSection
          title="Demonstration Video"
          description="The IoT Egg Incubator autonomously maintains precise temperature and humidity while gently turning eggs for uniform development. In this demo, you’ll see it reach the target temperature in under 20 minutes, hold ±0.03 °C stability at the egg level, and perform automated egg-turning cycles. Real-time monitoring and remote control are enabled via IoT, showcasing the system’s fully autonomous operation."
        >
          <MediaItem src="/videos/Incubator_Working.mp4" type="video" caption="Incubator working in real-time" />
        </MediaSection>

        {/* Temperature / PID Performance */}
        <MediaSection
          title="Temperature Control Performance"
          description="The IoT Egg Incubator quickly reached the target temperature and maintained ±0.03 °C precision at the egg level. Automated egg-turning ensured uniform orientation, while IoT monitoring provided real-time data for temperature, humidity, and turning cycles. The system demonstrated reliable, fully autonomous operation, reducing manual intervention and improving hatching consistency."
        >
          <MediaItem src="/videos/Temp.mp4" type="video" caption="Real-time PID tuning and temperature results" />
        </MediaSection>

        {/* Solution */}
        <MediaSection
          title="Setup and Procedure Diagram"
          description="The IoT Egg Incubator operates via an ESP32 microcontroller that monitors temperature and humidity sensors and controls the heating element, motorized egg-turning mechanism, and fan. Sensor data drives automatic adjustments to maintain optimal incubation conditions. IoT connectivity allows real-time monitoring and remote control, ensuring precise and fully autonomous egg incubation."
        >
          <MediaItem src={BlockImage} type="image" caption="System block diagram" />
        </MediaSection>
        
        {/* IoT Dashboard */}
        <MediaSection
          title="IoT Control Dashboard"
          description="Monitor temperature, humidity, and egg-turning cycles in real time and adjust settings remotely via the connected IoT dashboard."
        >
          <MediaItem src={dashboardImage} type="image" caption="IoT Dashboard" />
        </MediaSection>

        {/* Touch Screen */}
        <MediaSection
          title="Touch Screen Interface"
          description="Directly control the incubator and visualize system status on the integrated 3.5-inch touchscreen display."
        >
          <MediaItem src={touchScreenDashboard} type="image" caption="Touch screen interface" />
        </MediaSection>

        

        {/* CFD */}
        <MediaSection
          title="CFD Airflow Simulation"
          description="Simulated airflow and heat distribution using MATLAB CFD, ensuring efficient circulation and uniform incubation conditions."
        >
          <MediaItem src={airFlowImage} type="image" caption="CFD Air Flow Simulation" />
        </MediaSection>

        {/* Key Takeaways */}
        <MediaSection title="Future Steps for Advanced IoT Egg Incubator Development"
        description= "To further enhance the incubator’s capabilities and create a fully autonomous, connected system, several key improvements are planned:">
          <section className="px-6 bg-white">
  <div className=" mx-auto text-center">
    

    <ul className="text-[16px] text-[#666666] leading-[1.9] text-center list-decimal list-inside  mx-auto ">
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <strong>Modular Sensor Integration:</strong> Additional temperature, humidity, and CO₂ sensors will be added at multiple levels to ensure uniform conditions across all eggs.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <strong>Automated Water/Humidity Control:</strong> A motorized water reservoir or misting system controlled by the ESP32 will automate humidity regulation.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <strong>Real-Time Alerts and AI Monitoring:</strong> AI-driven analysis of sensor data can detect anomalies early and send notifications via the IoT dashboard or mobile app.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <strong>Enhanced Egg-Turning Mechanism:</strong> Upgraded turning system allows variable angles and schedules to optimize hatching success.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <strong>Power and Wiring Optimization:</strong> Consolidating power sources, simplifying wiring, and improving component layout for a more compact and reliable system.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <strong>Optional Vision-Based Egg Monitoring:</strong> Cameras with image recognition could track individual egg development and adjust incubation parameters for optimal hatching.
      </motion.li>
    </ul>
  </div>
</section>


        </MediaSection>

   

      
      </section>
      </div>
      </main>

      <Footer />
    </div>
  );
}
