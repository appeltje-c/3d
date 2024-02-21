import SpinningMesh from '@components/SpinningMesh.tsx'
import {useEffect} from 'react'
import {Vector2} from 'three'

function Lathe(props: any) {

    const points: Array<Vector2> = [];

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            points.push(new Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
        }
    })

    return (
        <SpinningMesh label={'Lathe'} {...props}>
            {/**
             Create a Lathe
             https://threejs.org/docs/#api/en/geometries/LatheGeometry

             LatheGeometry(points : Array, segments : Integer, [param:Float phiStart], phiLength : Float)

             points — Array of Vector2s. The x-coordinate of each point must be greater than zero. Default is an array
             with (0,-0.5), (0.5,0) and (0,0.5) which creates a simple diamond shape.
             segments — the number of circumference segments to generate. Default is 12.
             phiStart — the starting angle in radians. Default is 0.
             phiLength — the radian (0 to 2PI) range of the lathed section 2PI is a closed lathe, less than 2PI is a
             portion. Default is 2PI.

             @todo does not seem to work as expected
             @ts-ignore */}
            <latheGeometry args={points}/>
        </SpinningMesh>
    )
}

export default Lathe
