import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {Mesh, MeshStandardMaterial} from 'three'

type GLTFResult = GLTF & {
    nodes: {
        pillbox: Mesh
        Blister: Mesh
    }
    materials: {
        Material: MeshStandardMaterial
    }
}

export function Pillbox(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/pill-box.glb') as GLTFResult
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.pillbox.geometry} material={materials.Material} />
            <mesh geometry={nodes.Blister.geometry} material={materials.Material} />
        </group>
    )
}

useGLTF.preload('/pill-box.glb')
