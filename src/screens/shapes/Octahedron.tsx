import SpinningMesh from '@components/SpinningMesh.tsx'

function Octahedron(props: any) {
    return (
        <SpinningMesh label={'Octahedron'} {...props}>
            {/**
             Create a Octahedron
             https://threejs.org/docs/#api/en/geometries/OctahedronGeometry

             OctahedronGeometry(radius : Float, detail : Integer)

             radius — Radius of the octahedron. Default is 1.
             detail — Default is 0. Setting this to a value greater than zero add vertices making it no longer an octahedron.
             */}
            <octahedronGeometry args={[0.5]}/>
        </SpinningMesh>
    )
}

export default Octahedron
