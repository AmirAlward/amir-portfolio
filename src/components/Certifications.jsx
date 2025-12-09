import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Certifications = () => {
  const [showCredential, setShowCredential] = useState({});

  const certifications = [
    {
      id: 1,
      title: "Industrial Training: Amran Cement Plant",
      issuer: "Training and Industrial Research Institute",
      issuedDate: "May 28, 2024",
      details: "Trainee in Department of Electricity and Control, Mechanical Maintenance, Electrical Station. Gained practical experience in communication interfaces, electrical equipment operation, and production processes.",
      hasPdf: true,
      pdfUrl: "https://drive.google.com/file/d/1R4S2C7MeHdZva8K4tQb1yiOYA3gZWptB/view?usp=sharing"
    },
    {
      id: 2,
      title: "Classic Control Intensive Training",
      issuer: "Technical Industrial Institute - Dhaban, Ministry of Education & Scientific Research",
      issuedDate: "February 2025",
      details: "Completed an intensive 60-hour training course in Classic Control, achieving Excellent performance.",
      hasPdf: true,
      pdfUrl: "https://drive.google.com/file/d/1WxRcOS31HWRWKou9ZPzX98oOLTXiSpTe/view?usp=sharing"
    },
    {
      id: 3,
      title: "Industrial Training: Arwa Mineral Water Company",
      issuer: "Arwa Mineral Water Company – Shamlan",
      issuedDate: "February 21, 2025",
      details: "Completed hands-on maintenance training under company specialists from Jan 15, 2025 to Feb 21, 2025, gaining experience in mechanical and electrical maintenance processes.",
      hasPdf: true,
      pdfUrl: "https://drive.google.com/file/d/1gvjRorj3Hqk8xvCF68-ARG5APaWqGyQm/view?usp=sharing"
    },

    // ------------------- Project-Based / Self-Learned -------------------
    {
      id: 4,
      title: "IoT & Embedded Systems Development (ESP32 + PID Control)",
      issuer: "Project-Based / Self-Learned",
      issuedDate: "June 2024",
      hasPdf: false
    },
    {
      id: 5,
      title: "Robotics Kinematics & Motion Planning (MATLAB Robotics Toolbox)",
      issuer: "Project-Based / Self-Learned",
      issuedDate: "November 2025",
      hasPdf: false
    },
    {
      id: 6,
      title: "SolidWorks Mechanical Design & Simulation",
      issuer: "Project-Based / Self-Learned",
      issuedDate: "November 2025",
      hasPdf: false
    },
    {
      id: 7,
      title: "PLC & Industrial Automation (Ladder Logic, KGL_WE)",
      issuer: "Project-Based / Self-Learned",
      issuedDate: "September 2024",
      hasPdf: false
    },

    // ------------------- Language Certification -------------------
    {
  id: 8,
  title: "EF SET English Certificate – C2 Proficient",
  issuer: "EF Standard English Test (EF SET)",
  issuedDate: "November 9, 2025",
  details: "Achieved C2 Proficient (Score: 74/100). Reading and Listening at C2 level.",
  hasPdf: true,
  pdfUrl: "https://drive.google.com/file/d/1Nw8GUS6NbCTzD6A71kYOQFITomZSJWlv/view?usp=sharing",
  credentialUrl: "https://cert.efset.org/RWE9z5"
},
{
  id: 9,
  title: "Web Development Course",
  issuer: "Sololearn",
  issuedDate: "April 17, 2024",
  details: "Completed the Web Development course with demonstrated theoretical and practical understanding.",
  hasPdf: true,
  pdfUrl: "https://drive.google.com/file/d/1c2k2higNEt0ghmF90DAbIU8A4MW1hUGC/view?usp=sharing"
},
  ];

  const toggleCredential = (id) => {
    setShowCredential((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-white p-4  font-sans">
      <div className="max-w-xl mx-auto md:space-y-8">
        <motion.h1
          className="md:text-4xl text-[28px] font-normal text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Licenses and Certifications
        </motion.h1>
        
        <div className="md:space-y-8 space-y-0">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="py-4 px-0 md:px-4 md:py-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h2 className="md:text-[22px] xl:text-[26px] text-[20px] leading-none font-normal text-center mb-1 md:mb-2">{cert.title}</h2>
              <p className="text-gray-500 text-center mb-0 md:mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-center mb-4 md:mb-6">
                Issued {cert.issuedDate} {cert.credentialId && `| Credential ID: ${cert.credentialId}`}
              </p>
              
              <div className="flex  justify-center gap-x-3 ">
                {/* If certificate has credentialUrl: open link. Otherwise: toggle details */}
{cert.credentialUrl ? (
  <motion.a
    href={cert.credentialUrl}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-2 py-2 md:px-4 bg-[#262626] text-white hover:bg-[#666666]  rounded-xl transition-colors duration-200"
  >
    Show Credential
  </motion.a>
) : (
  <motion.button 
    onClick={() => toggleCredential(cert.id)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-2 py-2 md:px-4 bg-[#262626] text-white hover:bg-[#666666] rounded-xl transition-colors duration-200"
  >
    Show Credential
  </motion.button>
)}

                
                {cert.hasPdf && (
                  <motion.button
                    onClick={() => window.open(cert.pdfUrl, "_blank")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" bg-[#262626] text-white px-4 hover:bg-[#666666] rounded-xl transition-colors duration-200"
                  >
                    View Certificate PDF
                  </motion.button>
                )}
              </div>
              
              {showCredential[cert.id] && (
                <motion.div
                  className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Credential Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Certification:</p>
                      <p className="text-gray-700">{cert.title}</p>
                    </div>
                    <div>
                      <p className="font-medium">Issuer:</p>
                      <p className="text-gray-700">{cert.issuer}</p>
                    </div>
                    <div>
                      <p className="font-medium">Issued Date:</p>
                      <p className="text-gray-700">{cert.issuedDate}</p>
                    </div>
                    {cert.credentialId && (
                      <div>
                        <p className="font-medium">Credential ID:</p>
                        <p className="text-gray-700">{cert.credentialId}</p>
                      </div>
                    )}
                  </div>
                  {cert.details && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">{cert.details}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Certifications;
