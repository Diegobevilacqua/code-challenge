import { render } from '@testing-library/react'
import React from 'react'
import { Scan } from '../Components/Scan'

describe("Scan", () => {
    it("Scan renders without crashing", () => {
        render(<Scan />)
    }) 
})
