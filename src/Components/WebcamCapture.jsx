import React, { useState, useContext } from 'react';
import Webcam from "react-webcam";
import {Button} from '@material-ui/core';
import UrlContext from './CheckServerStatus'
 
const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const getProtocolAndHostname = (url) => {
    url = new URL(url)
    return url.protocol + "//" + url.hostname
}
 
export const WebcamCapture = (props) => {
    const [image, setImage] = useState('')
    const webcamRef = React.useRef(null)
    const url = useContext(UrlContext)
    
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        alert("Se sube la foto");
        upload(image)
    });

    const upload = (file) => {
        fetch(getProtocolAndHostname(props.url) + "/api/v1.0/ranking", {
            method: "POST",
            body: file
        }).then(response => response.json())
    }
 
    return (
        <div className="webcam-container">
            <div className="webcam-img">                  
                {image == '' ? 
                    <Webcam
                        audio={false}
                        height={210}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={210}
                        videoConstraints={videoConstraints}
                    /> : 
                    <img src={image} />
                }
            </div>
            <div className="ImageCam">            
                {image != '' ?
                    <Button 
                        variant="contained" 
                        color="secondary"
                        size="small" 
                        onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }}
                        className="webcam-btn"
                    >
                        Retake Image
                    </Button> :
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size="small" 
                        onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        className="webcam-btn"
                    >
                    Capture
                    </Button>
                }
            </div>
        </div>   
    );
};