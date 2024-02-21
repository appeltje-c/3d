import SpinningMesh from "@components/SpinningMesh.tsx";

function Circle(props: any) {
    return (
        <SpinningMesh label={'Circle'} {...props}>
            {/**
             Create a Circle
             https://threejs.org/docs/#api/en/geometries/CircleGeometry

             CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)

             radius — Radius of the circle, default = 1.
             segments — Number of segments (triangles), minimum = 3, default = 32.
             thetaStart — Start angle for first segment, default = 0 (three o'clock position).
             thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
             */}
            <circleGeometry args={[0.5, 32]}/>
        </SpinningMesh>
    )
}

export default Circle
