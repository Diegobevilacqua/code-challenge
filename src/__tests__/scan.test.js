import React from 'react'
import ReactDOM from 'react-dom'
import Scan from '../Components/Scan'

it("Scan renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Scan />, div)
})