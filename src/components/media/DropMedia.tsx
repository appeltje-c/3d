import {useDropzone} from 'react-dropzone'

type DropMediaProperties = {
    onDrop: any
}

const DropMedia = ({onDrop}: DropMediaProperties) => {

    const {getRootProps, isDragActive} = useDropzone({
        onDrop,
        maxFiles: 1
    })

    return (
        <div {...getRootProps()}>

            {
                isDragActive ?
                    (<p>Drop the files here...</p>) :
                    (<p>Drop your GLTF file here</p>)
            }

        </div>
    )
}

export default DropMedia
