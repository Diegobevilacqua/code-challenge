import { render, screen } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../Components/Home'

it("Home renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Home />, div)
})

describe("Home", () => {
    it("Home renders SCAN QR CODE text", () => {
        render(<Home />)
        expect(screen.getByText(/SCAN QR CODE/i)).toBeInTheDocument()
    })
})

