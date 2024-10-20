/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 start.gltf 
Author: rohit143r (https://sketchfab.com/rohit143r)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/race-drag-start-and-finish-line-f30a73703bb74d1fa4beacf731d1baf6
Title: Race drag Start and Finish Line
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Start(props) {
  const { nodes, materials } = useGLTF('/start.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-264.142, 675.591, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[623.015, 109.59, 100]}>
          <mesh geometry={nodes.Plane001_Start_0.geometry} material={materials.Start} />
          <mesh geometry={nodes.Plane001_Steal_0.geometry} material={materials.Steal} />
          <mesh geometry={nodes.Plane001_Finish_0.geometry} material={materials.Finish} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/start.gltf')
