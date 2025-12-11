import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

const robotModelPath = import.meta.env.BASE_URL + "models/ROBOT MH 12 YASKWA.gltf";

function RobotModel() {
  const { scene } = useGLTF(robotModelPath);

  scene.rotation.x = -Math.PI / 2;

  return <primitive object={scene} scale={0.001} />;
}

export default function Robot3DHero() {
  return (
    <div style={{ width: "100%", height: "40vh", minHeight: "300px" }}>
      <Canvas camera={{ position: [-40, 25, -25], fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

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
