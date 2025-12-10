import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";

const robotModelUrl = process.env.PUBLIC_URL + "/assets/ROBOT_MH_12_YASKWA.gltf";

function RobotModel() {
  const { scene } = useGLTF(
    robotModelUrl,
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  // upright
  scene.rotation.x = -Math.PI / 2;

  return <primitive object={scene} scale={0.001} />;
}

export default function Robot3DHero() {
  return (
    <div style={{ width: "100%", height: "40vh", minHeight: "300px", maxHeight: "400px" }}>
      <Canvas camera={{ position: [-40, 25, -25], fov: 40 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 5, 1]} intensity={0.8} />

        <Suspense fallback={null}>
          <Stage environment="city" intensity={0} shadows={false}>
            <RobotModel />
          </Stage>
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
