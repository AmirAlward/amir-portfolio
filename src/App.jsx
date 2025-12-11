// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EggIncubator from "./pages/projects/EggIncubator";
import ARWHS from "./pages/projects/ARWHS";
import ScrollToTop from "./components/ScrollToTop";
import IndustrialRobotArm from "./pages/projects/IndustrialRobotArm";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/iot-egg-incubator" element={<EggIncubator />} />
        <Route path="/projects/arwhs" element={<ARWHS />} />
        <Route path="/projects/industrial-robot-arm" element={<IndustrialRobotArm />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
