import SpinningMesh from "@components/SpinningMesh.tsx";

function Cone(props: any) {
    return (
        <SpinningMesh label={'Cone'} {...props}>
            {/**
             Create a Cone
             https://threejs.org/docs/#api/en/geometries/ConeGeometry

             ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)

             radius — Radius of the cone base. Default is 1.
             height — Height of the cone. Default is 1.
             radialSegments — Number of segmented faces around the circumference of the cone. Default is 32
             heightSegments — Number of rows of faces along the height of the cone. Default is 1.
             openEnded — A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
             thetaStart — Start angle for first segment, default = 0 (three o'clock position).
             thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.
             */}
            <coneGeometry args={[0.2, 0.5, 32]}/>
        </SpinningMesh>
    )
}

export default Cone
