// src/pages/projects/ARWHS.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// New images
import blockDiagram from "../../assets/ARWHS/Conceptual Block.png";
import workflowDiagram from "../../assets/ARWHS/Workflow Diagram.png";

// DM Sans font
const DMSansFont = () => (
  <style jsx global>{`
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dmsans/v16/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2) format('woff2');
    }
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dmsans/v16/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2) format('woff2');
    }
    @font-face {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dmsans/v16/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2) format('woff2');
    }
    body { font-family: 'DM Sans', sans-serif; }
  `}</style>
);

// Optimized MediaItem
const MediaItem = ({ src, type, caption }) => (
  <figure className="mb-8 flex flex-col items-center w-full">
    {type === "image" && (
      <img
        src={src}
        alt={caption}
        className="w-full max-w-3xl h-auto rounded-md shadow-sm object-contain"
        loading="lazy"
      />
    )}
    {caption && (
      <figcaption className="mt-2 text-gray-600 text-sm text-center max-w-full">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default function ARWHS() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DMSansFont />
      <Navbar />

      <main className="grow pt-24 md:pt-20 lg:pt-16 px-4 lg:px-0 max-w-[1000px] mx-auto">

        {/* Hero Section */}
        <section className="text-center py-8 md:py-10 lg:py-12">
          <h1 className="text-[56px] md:text-[48px] lg:text-[56px] font-medium tracking-[-0.5px] leading-none text-black mb-4">
            Automated Rainwater Harvesting System
          </h1>
          <p className="text-[20px] md:text-[18px] text-gray-700 max-w-[700px] mx-auto">
            Research-focused study on a mechatronic system design for sustainable water management in Yemen, including system simulation, methodology, and feasibility analysis.
          </p>
          <MediaItem src={blockDiagram} type="image" caption="Conceptual Block Diagram of the ARWHS" />
        </section>

        {/* Problem Section */}
        <section className="mb-20 max-w-[700px] mx-auto text-center">
          <h3 className="text-[28px] md:text-[22px] font-medium text-black mb-4">The Challenge</h3>
          <p className="text-[18px] text-gray-700 leading-[1.6] mb-4">
            Yemen faces severe water scarcity due to over-extraction of groundwater, damaged infrastructure, and conflict, leaving millions without reliable access to safe water.
          </p>
          <p className="text-[18px] text-gray-700 leading-[1.6]">
            Traditional rainwater collection methods are inefficient and labor-intensive. Our research proposes a conceptual automated system to optimize water capture, distribution, and sustainable usage.
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h3 className="text-[28px] md:text-[22px] font-medium text-black mb-6 text-center">Proposed System</h3>
          <p className="text-[18px] text-gray-700 leading-[1.6] mb-4">
            The ARWHS integrates sensors, actuators, and a central control unit to automate water collection and storage. Real-time adjustments based on rainfall and storage data prevent overflow and maintain water quality.
          </p>
          <p className="text-[18px] text-gray-700 leading-[1.6] mb-4">
            A sustainability and feasibility analysis was conducted, demonstrating the potential for long-term water savings and applicability across diverse rural communities in Yemen.
          </p>
          <MediaItem src={workflowDiagram} type="image" caption="Workflow Diagram of Sensor–Controller–Actuator Interactions" />
        </section>

        {/* Research Methodology */}
        <section className="mb-20">
          <h3 className="text-[28px] md:text-[22px] font-medium text-black mb-6 text-center">Research Methodology</h3>
          <ul className="text-[18px] text-gray-700 leading-[1.6] list-disc list-inside mb-4 max-w-[700px] mx-auto">
            <li>Mixed-methods approach: quantitative system simulation and qualitative stakeholder analysis.</li>
            <li>Simulated metrics: water volume collected, efficiency, and reliability under varying rainfall conditions.</li>
            <li>Stakeholder analysis: semi-structured interviews and focus groups with community leaders and farmers.</li>
            <li>Data analysis: statistical and inferential methods to quantify potential efficiency gains (up to 30%).</li>
          </ul>
        </section>

        {/* Key Findings */}
        <section className="mb-20 max-w-[700px] mx-auto text-center">
          <h3 className="text-[28px] md:text-[22px] font-medium text-black mb-4">Key Findings</h3>
          <ul className="text-[18px] text-gray-700 leading-[1.6] list-disc list-inside">
            <li>Automated system concept improves water collection efficiency and reduces manual errors.</li>
            <li>Modular and scalable design suitable for different community sizes and rainfall patterns.</li>
            <li>Supports agricultural productivity and potential food security through reliable water supply.</li>
            <li>Provides a foundation for future research and potential prototype development.</li>
          </ul>
        </section>

        {/* Tools & Skills */}
        <section className="mb-20 max-w-[700px] mx-auto text-center">
          <h3 className="text-[28px] md:text-[22px] font-medium text-black mb-4">Tools & Skills Demonstrated</h3>
          <ul className="text-[18px] text-gray-700 leading-[1.6] list-disc list-inside">
            <li>Mechatronic system design: sensors, actuators, control systems, and system modeling.</li>
            <li>Simulation and performance evaluation using statistical and time-series methods.</li>
            <li>Research methodology: mixed-methods analysis, stakeholder engagement, technical documentation.</li>
            <li>Core skills: problem-solving, sustainable engineering, project scoping, and communication.</li>
          </ul>
        </section>

        {/* CTA */}
<section className="text-center mb-20">
  <a
    href="https://drive.google.com/file/d/1Gh_8xChB8lxNYEgQS6aWZRYvWr8xDzHd/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 bg-black text-white text-[14px] font-medium rounded-[50px] no-underline hover:bg-gray-800 transition"
    aria-label="View Full Research Paper"
  >
    View Full Research Paper
  </a>
</section>


      </main>

      <Footer />
    </div>
  );
}
