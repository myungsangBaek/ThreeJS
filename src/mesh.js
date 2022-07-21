import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function CoinMesh() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.03));
  return (
    <mesh ref={mesh} scale={2.0}>
      <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
      <meshLambertMaterial attach="material" color="#ff9800" />
    </mesh>
  );
}

export default CoinMesh;
