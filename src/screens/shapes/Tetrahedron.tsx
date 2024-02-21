import SpinningMesh from '@components/SpinningMesh'

function Tetrahedron(props: any) {
    return (
        <SpinningMesh label={'Tetrahedron'} {...props}>
            {/**
             Create a Tetrahedron
             https://threejs.org/docs/#api/en/geometries/TetrahedronGeometry

             TetrahedronGeometry(radius : Float, detail : Integer)

             radius — Radius of the tetrahedron. Default is 1.
             detail — Default is 0. Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron.
             */}
            <tetrahedronGeometry args={[0.5]}/>
        </SpinningMesh>
    )
}

export default Tetrahedron
