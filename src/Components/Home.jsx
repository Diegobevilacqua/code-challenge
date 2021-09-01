import React from 'react'
import { Button, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

// const redirect = props => <Link to="/scan" {...props} />

export const Home = () => {
    return (
        <Container display="flex">
            <Button variant="contained" color="secondary" href="/scan">SCAN QR CODE</Button>
        </Container>      
    )
}

export default Home
