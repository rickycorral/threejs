import React, { useRef } from 'react';
import { DirectionalLight, AmbientLight, HemisphereLight } from 'three';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={100} // Adjust this value as needed
      alphaTest={2}
      scale={2} // Fix the typo here
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >

      <RandomizedLight
        amount={1}
        radius={9}
        intensity={5}
        ambient={5}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={.25}
        ambient={0.55}
        position={[-5, 50, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
