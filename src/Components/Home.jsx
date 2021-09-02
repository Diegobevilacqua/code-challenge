import React from 'react'
import { Button, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

// const redirect = props => <Link to="/scan" {...props} />

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
