import React from 'react';
import {Canvas} from 'react-three-fiber';
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
    <Box/>
  </Canvas>);
}