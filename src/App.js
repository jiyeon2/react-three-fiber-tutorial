import React from 'react';
import {Canvas} from 'react-three-fiber';
import {OrbitControls, Stars} from 'drei';
import {Physics, useBox, usePlane} from "use-cannon"; // pysics library : cannon js
import './style.css';

function Box() {
  const [ref] = useBox(() => ({mass: 1,  position:[0,2,0]}));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane(() => ({rotation:[-Math.PI /2,0,0] }));
  return (
    <mesh rotation={[-Math.PI /2,0,0]}>
      <planeBufferGeometry attach="geometry" args={[100,100]}/>
      <meshLambertMaterial attach="material" color="lightblue"/>
    </mesh>
  )
}
export default function App() {
  return (
  <Canvas>
    <OrbitControls/>
    <Stars />
    <ambientLight intensity={0.5}/>
    <spotLight
      position={[10,14,10]}
      angle={0.3}
    />
    <Physics>
      <Box/>
      <Plane/>
    </Physics>
    
    
  </Canvas>);
}