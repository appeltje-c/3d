import SpinningMesh from '@components/SpinningMesh'

function Torus(props: any) {
    return (
        <SpinningMesh label={'Torus'} {...props}>
            {/**
             Create a Torus
             https://threejs.org/docs/#api/en/geometries/TorusGeometry

             TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)

             radius - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
             tube — Radius of the tube. Default is 0.4.
             radialSegments — Default is 12
             tubularSegments — Default is 48.
             arc — Central angle. Default is Math.PI * 2.
             */}
            <torusGeometry args={[0.5, 0.1]}/>
        </SpinningMesh>
    )
}

export default Torus
