function Box() {
  return (
    <mesh scale={2.0}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Box;
