import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Cube from '@components/shapes/Cube.tsx'
import {Perf} from 'r3f-perf'

const Basic = () => {

    return (
        <Canvas>
            <Perf position={'top-left'} style={{backgroundColor: '#181C20'}} minimal={true} showGraph={false}/>
            <ambientLight/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
            <Cube position={[-1.2, 0, 0]} name={'Box 1'}/>

            <OrbitControls/>
        </Canvas>
    )
}

export default Basic
