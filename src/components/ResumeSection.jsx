// src/components/ResumeSection.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ResumeSection = () => {
  // Google Drive file ID
  const fileId = "1FV_yt9UrYyPi0ZI3ZcPlv2vmAPgNVZYp";
  const previewURL = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadURL = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const Button = ({ children, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="py-2 px-3 rounded-full bg-black text-white text-md font-extralight hover:bg-gray-800 transition flex items-center gap-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);


  return (
    <motion.div
      className="flex-col flex gap-y-6 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-[28px] md:text-3xl lg:text-4xl font-normal  text-center">Resume</h2>

      {/* Download Button */}
     <div className="flex justify-center ">
  <Button
    href={downloadURL}
    onClick={(e) => {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = downloadURL;
      link.download = "Amir_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    Click to Download
  </Button>
</div>


      {/* Resume Preview */}
      <div className="w-full flex justify-center aspect-[1/1.414] max-h-screen">
        <iframe
          src={previewURL}
          width="100%"
          height="100%"
          className="border border-gray-300 rounded-xl"
          title="Resume PDF"
        />
      </div>
    </motion.div>
  );
};

export default ResumeSection;
