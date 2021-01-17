import React from 'react';
import {Canvas} from 'react-three-fiber';
import {OrbitControls} from 'drei';
import './style.css';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="meterial" color="hotpink"/>
    </mesh>
  )
}
export default function App() {
  return (
  <Canvas>
    <OrbitControls/>
    <ambientLight intensity={0.5}/>
    <Box/>
  </Canvas>);
}