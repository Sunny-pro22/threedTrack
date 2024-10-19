/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 pull.gltf 
Author: PropShop™ (https://sketchfab.com/syedabbas0815)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/overpass-315e5c4768b9421f8a5103b5001f82b4
Title: OVERPASS
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Pull(props) {
  const { nodes, materials } = useGLTF('/pull.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-17.216, -134.99, 2027.036]} rotation={[-Math.PI / 2, 0.02, -Math.PI / 2]} scale={[4.452, 8.587, 5.406]}>
          <mesh geometry={nodes.overpass_Material005_0.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.overpass_Lights003_0.geometry} material={materials['Lights.003']} />
          <mesh geometry={nodes.overpass_Material006_0.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.overpass_Lights004_0.geometry} material={materials['Lights.004']} />
        </group>
        <mesh geometry={nodes.road_road001_0.geometry} material={materials['road.001']} position={[-16.858, 14.668, 2023.718]} rotation={[-Math.PI / 2, 0.005, Math.PI / 2]} scale={[-182.48, 368.374, 421.476]} />
        <mesh geometry={nodes.overpass001_Material_0.geometry} material={materials.Material} position={[-17.216, -134.99, 2027.036]} rotation={[-Math.PI / 2, 0.02, -Math.PI / 2]} scale={[4.452, 8.587, 5.406]} />
      </group>
    </group>
  )
}

useGLTF.preload('/pull.gltf')
