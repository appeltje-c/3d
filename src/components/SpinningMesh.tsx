import { useRef, useState } from 'react'
import { Html } from '@react-three/drei'
import { Chip } from '@mui/material'

function SpinningMesh(props: any) {

    const ref = useRef(null!)
    const [selected, setSelected] = useState(false)

    const handleSelection = () => {
        setSelected(!selected)

        console.info()
    }

    return (
        <mesh
            {...props}
            scale={selected ? 1.5 : 1}
            ref={ref}
            onClick={() => {
                handleSelection()
            }}>

            {props.children}

            <meshStandardMaterial color={selected ? props.selected : props.color} />

            {
                props.label &&
                <Html distanceFactor={10}>
                    <Chip label={props.label} color="secondary" style={{userSelect: 'none'}}/>
                </Html>
            }

        </mesh>
    )
}

export default SpinningMesh
