import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core';
import { WebcamCapture } from './WebcamCapture';
import { UrlContext } from './Scan';

import { getServerUrl, getUser, getPassword } from '../Common/stringHandlers';

import axios from "axios"
import ServerOK from './ServerOK';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CheckServerStatus(props) {
  const [serverUrl, setServerUrl] = useState(props.url)
  const [serverOK, setServerOK] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)
  const classes = useStyles();

  let url = getServerUrl(props.url)
  let user = getUser(props.url)
  let password = getPassword(props.url)

  const getStatusCode = async () => {
    await fetch(url + "/api/v1.0/status", {
      headers: new Headers({
        "Authorization": `Basic ${btoa(`${user}:${password}`)}`
      }),      
    })
      .then(response => {
        if (response.status === 200)
          setServerOK(true)
        return response.status;
    })
  }

  const onClickCheckServerStatus = () => {
    let statusCode = getStatusCode(props.url.substring("apiserver:".length))

    if (statusCode == 200) {
      setServerOK(true)
    }
  }

  return (
    !buttonClicked ? 
      <div className={classes.root}>
        <ButtonGroup>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={onClickCheckServerStatus}
          >
            Check Server Status
          </Button>
          {serverOK ? <ServerOK /> : ""}
          <Button 
            variant="contained" 
            color="secondary" 
            //href="/webcamCapture"
            disabled={!serverOK}
            onClick={setButtonClicked}
          >
            Take photo and upload it
          </Button>
        </ButtonGroup>    
      </div> :
      <WebcamCapture url={url} user={user} password={password} />
  )
}