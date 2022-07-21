import React from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";

import Box from "./box";
import { OrbitControls } from "@react-three/drei";
import CoinMesh from "./mesh";

function App() {
  return (
    <div className="App">
      <Canvas>
        {/* 회전 */}
        <OrbitControls />
        {/* 색 */}
        <ambientLight intensity={0.5} />

        <CoinMesh />
      </Canvas>
    </div>
  );
}

export default App;
