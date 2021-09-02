import '@testing-library/jest-dom'
import * as React from 'react'
import { ReactDOM } from 'react-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import HiddenMessage from '../hidden-message'

describe("Scan", () => {
    it("Scan renders without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(<Scan />, div)
    }) 
})

















