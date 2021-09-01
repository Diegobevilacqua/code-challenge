import React, {useState } from 'react'
import {Container, makeStyles } from '@material-ui/core'
import QrReader from 'react-qr-reader'
import CheckServerStatus from './CheckServerStatus'

export const UrlContext = React.createContext()

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

const getUser = (userPair) => {
  let arr = userPair.split(":")
  return arr[1]
}

const getPasswordPair = (str) => {
  let arr = str.split(";")
  return arr[2]
}

const getPassword = (passwordPair) => {
  let arr = passwordPair.split(":")
  return arr[1]
}

export function Scan() { 
  const [url, setUrl] = useState("")
  const classes = useStyles()

  const handleScanWebCam = (result) => {
    if (result) {
        alert("la url entera es: " + result)
        console.log("la url es", getURL(result))
        console.log("la pathname es:", getPathname(getURL(result)))
        console.log("user pair:", getUserPair(getPathname(getURL(result))))
        console.log("user:", getUser(getUserPair(getPathname(getURL(result)))))
        console.log("password:", getPassword(getPasswordPair(getPathname(getURL(result)))))
        let serverURL = getServerURL(result)
        setUrl(result)
    }
  }

  return (
    <UrlContext.Provider value={url}>
      {url == "" ?
      <Container className={classes.container}>
        <QrReader
          delay={100}
          style={{width: '100%'}}
          onError={(err) => console.error(err)}
          onScan={handleScanWebCam}
        />
      </Container> : <CheckServerStatus/>}
    </UrlContext.Provider>
  );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
