import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom"

import CheckServerStatus from "./Components/CheckServerStatus"
import { Home } from './Components/Home'
import { Scan } from './Components/Scan'
import ShowPicture from "./Components/ShowPicture"
import { WebcamCapture } from "./Components/WebcamCapture"

function App() {
  return (
    <Router>  
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/scan' component={Scan} />
        <Route path='/checkServerStatus' component={CheckServerStatus} />
        <Route path='/webcamCapture' component={WebcamCapture} />
        <Route path='/showPicture' component={ShowPicture} />
        <Redirect from='*' to='/home' />
      </Switch>    
    </Router>  
  )
}

export default App
