import BarcodeScanner from '@components/media/BarcodeScanner'
import {Canvas, useFrame} from "@react-three/fiber"
import {Perf} from "r3f-perf";
import {OrbitControls} from "@react-three/drei"
import {useRef} from "react"
import {Pillbox} from "./products/Pillbox"

function Scan() {

    const ean = {
        "7896422504911": "Pillbox"
    }

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
                    // @ts-ignore
                    const ProductToRender = Products[ean[result.getText()]]


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
