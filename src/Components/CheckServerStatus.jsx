import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core';
import { WebcamCapture } from './WebcamCapture';
import { UrlContext } from './Scan';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const getHost = (url) => {
  url = new URL(url)
  return url.host
}

const getURL = (url) => {
  return url.substring("apiserver:".length)
}

const getServerURL = (str) => {
  let url = str.substring("apiserver:".length)
  url = new URL(url)
  url = url.protocol + "//" + url.host
  return url
}

const getPathname = (url) => {
  url = new URL(url)
  return url.pathname
}

const getUserPair = (str) => {
  let arr = str.split(";")
  return arr[1]
}

const getUser = (url) => {
   let pair = getUserPair(getPathname(getURL(url)))
   let arr = pair.split(":")
   return arr[1]
}

const getPasswordPair = (str) => {
  let arr = str.split(";")
  return arr[2]
}

const getPassword = (url) => {
  let pair = getPasswordPair(getPathname(getURL(url)))
  let arr = pair.split(":")
  return arr[1]
}

export default function CheckServerStatus() {
  const [serverOK, setServerOK] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)
  const classes = useStyles();
  const url = useContext(UrlContext);

  alert("url que llega por context " + url)

  let user = getUser(url)
  let password = getPassword(url)

  const getStatusCode = async (url) => {
    await fetch(url/*, {
      headers: new Headers({
        "Authorization": `Basic ${btoa(`${user}:${password}`)}`
      }),      
    }*/)
      .then(response => {
        if (response.status === 200)
          setServerOK(true)
        return response.status;
    })
  }

  const onClickCheckServerStatus = () => {
    let statusCode = getStatusCode(url.substring("apiserver:".length))

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
      <WebcamCapture url={url}/>
  )
}