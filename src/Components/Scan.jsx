import React, {useState } from 'react'
import {Container, makeStyles } from '@material-ui/core'
import QrReader from 'react-qr-reader'
import CheckServerStatus from './CheckServerStatus'
import { getServerUrl } from '../Common/stringHandlers'

export const UrlContext = React.createContext()

export function Scan() { 
  const [url, setUrl] = useState("")
  const classes = useStyles()

  const handleScanWebCam = (result) => {
    if (result) {
      let serverURL = getServerUrl(result)
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
      </Container> : <CheckServerStatus url={url}/>}
    </UrlContext.Provider>
  );
}

const useStyles = makeStyles((theme) => ({
    container: {
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
