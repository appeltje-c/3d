import SpinningMesh from '@components/SpinningMesh.tsx'

function Icosahedron(props: any) {
    return (
        <SpinningMesh label={'Icosahedron'} {...props}>
            {/**
             Create a Icosahedron
             https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry

             IcosahedronGeometry(radius : Float, detail : Integer)

             radius — Default is 1.
             detail — Default is 0. Setting this to a value greater than 0 adds more vertices making it no
             longer an icosahedron. When detail is greater than 1, it's effectively a sphere.
             */}
            <icosahedronGeometry args={[0.5]}/>
        </SpinningMesh>
    )
}

export default Icosahedron
