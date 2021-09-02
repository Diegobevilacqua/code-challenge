import { render, screen } from '@testing-library/jest-dom'
import * as React from 'react'
import Scan from '../Components/Scan'

it("Scan renders without crashing", () => {
    const div = document.createElement("div")
    render(<Scan />, div)
}) 

















