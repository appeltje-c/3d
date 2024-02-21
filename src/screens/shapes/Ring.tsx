import SpinningMesh from '@components/SpinningMesh'

function Ring(props: any) {
    return (
        <SpinningMesh label={'Ring'} {...props}>
            {/**
             Create a Ring
             https://threejs.org/docs/#api/en/geometries/RingGeometry

             RingGeometry(innerRadius : Float, outerRadius : Float, thetaSegments : Integer, phiSegments : Integer, thetaStart : Float, thetaLength : Float)

             innerRadius — Default is 0.5.
             outerRadius — Default is 1.
             thetaSegments — Number of segments. A higher number means the ring will be more round. Minimum is 3. Default is 32.
             phiSegments — Number of segments per ring segment. Minimum is 1. Default is 1.
             thetaStart — Starting angle. Default is 0.
             thetaLength — Central angle. Default is Math.PI * 2.
             */}
            <ringGeometry args={[0.2, 0.5]}/>
        </SpinningMesh>
    )
}

export default Ring
