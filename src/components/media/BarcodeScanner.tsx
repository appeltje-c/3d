import React, {useEffect, useRef, useCallback} from 'react'
import {BrowserMultiFormatReader, Result, BarcodeFormat, DecodeHintType} from "@zxing/library";
import Webcam from "react-webcam";

const BarcodeScanner = ({
                            onUpdate,
                            onError
                        }: {
    onUpdate: (arg0: unknown, arg1?: Result) => void
    onError?: (arg0: string | DOMException) => void
}): React.ReactElement => {

    const webcamRef = useRef<Webcam>(null!)

    const capture = useCallback(() => {

        const hints = new Map();
        const enabledFormats = [
            BarcodeFormat.EAN_8,
            BarcodeFormat.EAN_13
        ];
        hints.set(DecodeHintType.POSSIBLE_FORMATS, enabledFormats)

        const codeReader = new BrowserMultiFormatReader(hints)
        const imageSrc = webcamRef.current.getScreenshot()

        if (imageSrc) {
            codeReader.decodeFromImage(undefined, imageSrc).then((result) => {
                onUpdate(result)
            }).catch(() => {
            })
        }

    }, [onUpdate]);

    useEffect(() => {
        const interval = setInterval(capture, 500)
        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <Webcam
            width={300}
            height={100}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
                facingMode: 'environment'
            }}
            audio={false}
            onUserMediaError={onError}
        />
    );
};

export default BarcodeScanner;
