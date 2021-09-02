import { render, screen } from '@testing-library/react'
import React from 'react'
import CheckServerStatus from '../Components/CheckServerStatus'

describe("CheckServerStatus", () => {
    it("CheckServerStatus renders 'Check Server Status' text", () => {
        render(<CheckServerStatus url="apiserver:https://www.google.com" />)
        expect(screen.getByText(/Check server status/i)).toBeInTheDocument()
    })
})