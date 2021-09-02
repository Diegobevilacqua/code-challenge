import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

const ShowPicture = () => {

    const {img, api} = useSelector(state => state.default)

    return (
        <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <h2>Your uploaded picture</h2>
            <img src={api+img} />
        </Grid>
    )
}

export default ShowPicture
