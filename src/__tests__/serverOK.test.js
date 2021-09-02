import { render, screen } from '@testing-library/react'
import React from 'react'
import ServerOK from '../Components/ServerOK'

describe("ServerOK", () => {
    it("ServerOK renders 'Server: OK' text", () => {
        render(<ServerOK />)
        expect(screen.getByText(/Server: OK/i)).toBeInTheDocument()
    })
})