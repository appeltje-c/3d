import { Canvas } from '@react-three/fiber'
import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'
import Box from './Box.tsx'
import { Perf } from 'r3f-perf'
import Sphere from "./Sphere.tsx";
import Capsule from "./Capsule.tsx";
import Circle from "./Circle.tsx";
import Cone from "./Cone.tsx";
import Cylinder from "./Cylinder.tsx";
import { useRef } from "react";
import Dodecahedron from "./Dodecahedron.tsx";
import Icosahedron from "./Icosahedron.tsx";
import Lathe from "./Lathe.tsx";
import Octahedron from "./Octahedron.tsx";
import Plane from "./Plane.tsx";
import Ring from "./Ring.tsx";
import Tetrahedron from "./Tetrahedron.tsx";
import Torus from "./Torus.tsx";
import { useTheme } from '@mui/material/styles';
import { useControls } from 'leva';

const Shapes = () => {

    const theme = useTheme()
    const { color, selected } = useControls(
        {
            color: theme.palette.primary.main,
            selected: theme.palette.secondary.main
        })

    function Shapes({ children }: any) {

        const ref = useRef(null!)
        // @ts-ignore
        //useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))

        return (
            <group ref={ref}>
                {children}
            </group>
        )
    }

    return (
        <Canvas>
            <Perf position={'top-left'} style={{ backgroundColor: '#181C20' }} minimal={true} showGraph={false} />


            <ambientLight />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

            <OrbitControls />

            <Shapes>

                <Sphere position={[1, 0, 0]} color={color} selected={selected} />
                <Box position={[-1, 0, 0]} color={color} selected={selected} />

                <Dodecahedron position={[0, 2, 0]} color={color} selected={selected} />
                <Icosahedron position={[0, -2, 0]} color={color} selected={selected} />

                <Lathe position={[0, 0, 2]} color={color} selected={selected} />
                <Octahedron position={[0, 0, -2]} color={color} selected={selected} />

                <Capsule position={[2, 1, 0]} color={color} selected={selected} />
                <Circle position={[-2, -1, 0]} color={color} selected={selected} />

                <Plane position={[2, 0, 2]} color={color} selected={selected} />
                <Ring position={[-2, 0, -2]} color={color} selected={selected} />

                <Cone position={[2, 2, 2]} color={color} selected={selected} />
                <Cylinder position={[-2, -2, -2]} color={color} selected={selected} />

                <Tetrahedron position={[0, 2, 2]} color={color} selected={selected} />
                <Torus position={[0, -2, -2]} color={color} selected={selected} />

            </Shapes>

            <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
                <GizmoViewport labelColor="white" axisColors={['red', 'green', 'blue']} axisHeadScale={1} />
            </GizmoHelper>

        </Canvas>
    )
}

export default Shapes
