import BarcodeScanner from '@components/media/BarcodeScanner.tsx'
import {Canvas, useFrame} from "@react-three/fiber";
import {Perf} from "r3f-perf";
import {OrbitControls} from "@react-three/drei";
import {Pillbox} from "./Pillbox.tsx";
import {useRef} from "react";

function Scan() {

    function Rotate({children}: any) {

        const ref = useRef(null!)
        // @ts-ignore
        useFrame(() => (ref.current.rotation.y += 0.005))

        return (
            <group ref={ref}>
                {children}
            </group>
        )
    }

    return (
        <>
            <BarcodeScanner
                onUpdate={result => {

                    console.info(result)

                }}
            />
            <Canvas>

                <Perf position={'top-left'} style={{backgroundColor: '#181C20'}} minimal={true} showGraph={false}/>

                <ambientLight/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>

                <OrbitControls/>

                <Rotate>
                    <Pillbox/>
                </Rotate>

            </Canvas>
        </>
    )
}

export default Scan
