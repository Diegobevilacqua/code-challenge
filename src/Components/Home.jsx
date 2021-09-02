import React from 'react'
import { Button, Grid } from '@material-ui/core'

export const Home = () => {
    return (
        <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Button variant="contained" color="primary" href="/scan" size="large">SCAN QR CODE</Button>
        </Grid>            
    )
}

export default Home
