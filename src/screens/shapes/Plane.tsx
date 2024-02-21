import SpinningMesh from '@components/SpinningMesh'

function Plane(props: any) {
    return (
        <SpinningMesh label={'Plane'} {...props}>
            {/**
             Create a Plane
             https://threejs.org/docs/#api/en/geometries/PlaneGeometry

             PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)

             width — Width along the X axis. Default is 1.
             height — Height along the Y axis. Default is 1.
             widthSegments — Optional. Default is 1.
             heightSegments — Optional. Default is 1.
             */}
            <planeGeometry args={[0.5, 0.5]}/>
        </SpinningMesh>
    )
}

export default Plane
