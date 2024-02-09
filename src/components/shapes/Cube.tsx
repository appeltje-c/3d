import {useControls} from "leva";
import {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";

function Cube(props: any) {

    const {color, scale} = useControls(
        {
            color: '#140d9a',
            scale: {
                value: 1,
                min: 1,
                max: 2
            }
        })

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef(null!)

    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // @ts-ignore
    useFrame((state, delta) => (ref.current.rotation.x += delta))

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : scale}
            onClick={() => {
                click(!clicked)
                hover(true)
            }}
            onPointerOver={(event) => {
                event.stopPropagation()
                hover(true)
            }}
            onPointerOut={() => hover(false)}>

            {/**
             * Create a box geo of size 1 by 1 by 1
             *
             * Three.js uses SI units everywhere.
             * https://en.wikipedia.org/wiki/International_System_of_Units
             *
             * If you also use SI units, you will find that things work more
             * smoothly. If you do use a different kind of unit for some reason, such as inches (shudder), make
             * sure that you have a good reason for doing so.
             */}
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? '#721eb1' : color}/>
        </mesh>
    )
}

export default Cube
