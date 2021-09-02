import React from 'react'
import { ReactDOM } from 'react-dom'
import { render, screen } from '@testing-library/react'
import Home from '../Components/Home'

it("Home renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
})

it("Home renders SCAN QR CODE text", () => {
    render(<Home />)
    expect(screen.getByText(/SCAN QR CODE/i)).toBeInTheDocument()
})


