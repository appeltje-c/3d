import {Grid} from '@mui/material'
import DropMedia from "@components/media/DropMedia.tsx";
import {useCallback, useState} from "react";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import Viewer from './viewer'

function Loader() {

    const [scene, setScene] = useState()

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/examples/jsm/libs/draco/')

    const gltfLoader = new GLTFLoader()
        .setCrossOrigin('anonymous')
        .setDRACOLoader(dracoLoader)


    const onDrop = useCallback((acceptedFiles: any) => {

        acceptedFiles.forEach((file: File) => {

            const reader = new FileReader()
            reader.onabort = () => console.error('file reading was aborted')
            reader.onerror = () => console.error('file reading has failed')
            reader.onload = async () => {

                const data = reader.result as ArrayBuffer
                console.info(data)

                const result = await new Promise((resolve, reject) => gltfLoader.parse(data, '', resolve, reject))
                console.info(result)

                // @ts-ignore
                setScene(result.scene)

            }
            reader.readAsArrayBuffer(file)
        })
    }, [])

    return (
        <Grid container
              alignItems={'center'}
              sx={{minHeight: '80vh'}}>

            <Grid item>

                {
                    !scene &&
                  <DropMedia onDrop={onDrop}/>
                }

                {
                    scene &&
                  <Viewer scene={scene}/>
                }

            </Grid>

        </Grid>
    )
}

export default Loader
