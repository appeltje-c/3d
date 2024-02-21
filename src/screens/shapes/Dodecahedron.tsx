import SpinningMesh from "@components/SpinningMesh.tsx";

function Dodecahedron(props: any) {
    return (
        <SpinningMesh label={'Dodecahedron'} {...props}>

            {/**
             Create a Dodecahedron
             https://threejs.org/docs/#api/en/geometries/DodecahedronGeometry

             DodecahedronGeometry(radius : Float, detail : Integer)

             radius — Radius of the dodecahedron. Default is 1.
             detail — Default is 0. Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron.

             */}
            <dodecahedronGeometry args={[0.5]}/>
        </SpinningMesh>
    )
}

export default Dodecahedron
