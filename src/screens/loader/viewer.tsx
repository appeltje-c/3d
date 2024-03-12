import {Suspense, useLayoutEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'

const Viewer = ({scene}: any) => {

    useLayoutEffect(() => {
        scene.traverse((obj: any) => {
            if (obj.isMesh) {
                obj.castShadow = obj.receiveShadow = true
                obj.material.envMapIntensity = 0.8
            }
        })
    }, [scene])

    return (
        <Canvas gl={{preserveDrawingBuffer: true}}
                shadows={true} dpr={[1, 1.5]}
                camera={{position: [0, 0, 150], fov: 50}} >
            <ambientLight intensity={0.25}/>
            <Suspense fallback={null}>
                <Stage
                    preset={'soft'}
                    intensity={1}
                    shadows={true}
                    adjustCamera
                    environment={'sunset'}>
                    <primitive object={scene}/>
                </Stage>
            </Suspense>
            <OrbitControls autoRotate={true}/>
        </Canvas>
    )
}

export default Viewer
