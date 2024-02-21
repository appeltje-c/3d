import SpinningMesh from "@components/SpinningMesh.tsx";

function Capsule(props: any) {
    return (
        <SpinningMesh label={'Capsule'} {...props}>
            {/**
             Create a Capsule
             https://threejs.org/docs/index.html?q=geom#api/en/geometries/CapsuleGeometry

             CapsuleGeometry(radius : Float, length : Float, capSegments : Integer, radialSegments : Integer)

             radius — Radius of the capsule. Optional; defaults to 1.
             length — Length of the middle section. Optional; defaults to 1.
             capSegments — Number of curve segments used to build the caps. Optional; defaults to 4.
             radialSegments — Number of segmented faces around the circumference of the capsule. Optional; defaults to 8.
             */}
            <capsuleGeometry args={[0.2, 0.5, 32, 32]}/>
        </SpinningMesh>
    )
}

export default Capsule
