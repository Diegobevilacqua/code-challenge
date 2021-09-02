import { render, screen } from '@testing-library/react'
import React from 'react'
import WebcamCapture from '../Components/WebcamCapture'

// describe("WebcamCapture", () => {
//     it("WebcamCapture renders 'Capture' text", () => {
//         render(<WebcamCapture />)
//         expect(screen.getByText(/Capture/i)).toBeInTheDocument()
//     })
// })

test("rendering WebcamCapture", () => {
    render(<WebcamCapture />)
})