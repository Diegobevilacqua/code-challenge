import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../Components/Home'

it("Home component renders successfully", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Home />, div)
})