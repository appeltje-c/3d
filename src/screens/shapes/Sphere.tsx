import SpinningMesh from '@components/SpinningMesh.tsx'

function Sphere(props: any) {
    return (
        <SpinningMesh label={'Sphere'} {...props}>
            {/**
             Create a Sphere
             https://threejs.org/docs/#api/en/geometries/SphereGeometry

             SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)

             radius — sphere radius. Default is 1.
             widthSegments — number of horizontal segments. Minimum value is 3, and the default is 32.
             heightSegments — number of vertical segments. Minimum value is 2, and the default is 16.
             phiStart — specify horizontal starting angle. Default is 0.
             phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
             thetaStart — specify vertical starting angle. Default is 0.
             thetaLength — specify vertical sweep angle size. Default is Math.PI.
             */}
            <sphereGeometry args={[0.5, 32, 32]}/>
        </SpinningMesh>
    )
}

export default Sphere
