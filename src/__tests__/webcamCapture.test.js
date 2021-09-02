import { render, screen } from '@testing-library/react'
import React from 'react'
import WebcamCapture from '../Components/WebcamCapture'

test("rendering WebcamCapture", () => {
    render(<WebcamCapture />)
    expect(screen.getByText(/Capture/i)).toBeInTheDocument()
})