// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EggIncubator from "./pages/projects/EggIncubator";
import ARWHS from "./pages/projects/ARWHS"; // <-- import the new research page
import ScrollToTop from "./components/ScrollToTop";
import IndustrialRobotArm from "./pages/projects/IndustrialRobotArm"; // <-- import new page

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes basename= "/my-portfolio/">
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/iot-egg-incubator" element={<EggIncubator />} />
        <Route path="/projects/arwhs" element={<ARWHS />} /> {/* <-- new route */}
        <Route path="/projects/industrial-robot-arm" element={<IndustrialRobotArm />} />  {/* <-- new route */}


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
