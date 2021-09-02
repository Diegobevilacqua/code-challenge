import React from 'react'
import { useSelector } from 'react-redux'

const ShowPicture = () => {

    const {img, api} = useSelector(state => state.default)

    return (
        <>
            <h2>Your uploaded picture</h2>
            <img src={api+img} />
        </>
    )
}

export default ShowPicture
