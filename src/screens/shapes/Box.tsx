import SpinningMesh from '@components/SpinningMesh'

function Box(props: any) {
    return (
        <SpinningMesh label={'Box'} {...props}>
            {/**
             Create a Box
             https://threejs.org/docs/#api/en/geometries/BoxGeometry

             BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)

             width — Width; that is, the length of the edges parallel to the X axis. Optional; defaults to 1.
             height — Height; that is, the length of the edges parallel to the Y axis. Optional; defaults to 1.
             depth — Depth; that is, the length of the edges parallel to the Z axis. Optional; defaults to 1.
             widthSegments — Number of segmented rectangular faces along the width of the sides. Optional; defaults to 1.
             heightSegments — Number of segmented rectangular faces along the height of the sides. Optional; defaults to 1.
             depthSegments — Number of segmented rectangular faces along the depth of the sides. Optional; defaults to 1.
             */}
            <boxGeometry args={[0.5, 0.5, 0.5]}/>
        </SpinningMesh>
    )
}

export default Box
