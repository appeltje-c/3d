import SpinningMesh from "@components/SpinningMesh.tsx";

function Cylinder(props: any) {
    return (
        <SpinningMesh label={'Cylinder'} {...props}>

            {/**
             Create a Cylinder
             https://threejs.org/docs/#api/en/geometries/CylinderGeometry

             CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)

             radiusTop — Radius of the cylinder at the top. Default is 1.
             radiusBottom — Radius of the cylinder at the bottom. Default is 1.
             height — Height of the cylinder. Default is 1.
             radialSegments — Number of segmented faces around the circumference of the cylinder. Default is 32
             heightSegments — Number of rows of faces along the height of the cylinder. Default is 1.
             openEnded — A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
             thetaStart — Start angle for first segment, default = 0 (three o'clock position).
             thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.

             */}
            <cylinderGeometry args={[0.2, 0.2, 0.5]}/>
        </SpinningMesh>
    )
}

export default Cylinder
