import { render, screen } from '@testing-library/react'
import React from 'react'
import ShowPicture from '../Components/ShowPicture'

it("rendering ShowPicture", () => {
    const div = document.createElement("div")
    render(<ShowPicture />, div)
    // expect(screen.getByText(/Capture/i)).toBeInTheDocument()
})