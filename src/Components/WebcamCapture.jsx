import React, { useState, useContext } from 'react'
import Webcam from "react-webcam"
import { Button, Grid } from '@material-ui/core'

import axios from 'axios'
import ShowPicture from './ShowPicture'

import { useDispatch, useSelector } from 'react-redux'
import { setImagen } from '../actions'

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};
 
export const WebcamCapture = (props) => {
    const [image, setImage] = useState('')
    const [dataFile, setDataFile] = useState("")
    const webcamRef = React.useRef(null)
    const dispatch = useDispatch()
    const {img} = useSelector(state => state.default)
    
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        upload(imageSrc)
    });

    const upload = async (file) => {
        let promise = await axios.post(`${props.url}/api/v1.0/ranking`, 
            {
                picture: file
            },{
                auth: {
                    username: props.user,
                    password: props.password
                }
            }).then((response) => {
                //setDataFile(response.data.file)
                dispatch(setImagen(response.data.file))
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        
        img == "" ? <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
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
                <div className="ImageCam" text-align="center">            
                    {/* {image != '' ?
                        <Button 
                            variant="contained" 
                            color="primary"
                            size="large" 
                            onClick={(e) => {
                                e.preventDefault();
                                setImage('')
                            }}
                            className="webcam-btn"
                        >
                            Retake Image
                        </Button> : }*/
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large" 
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
        </Grid> : <ShowPicture dataFile={dataFile} />
    );
};