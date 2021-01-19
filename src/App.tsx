import React from "react";
import ProfilePage from './profilepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css"
import ValhallaDenied from "./valhalladenied"
import PhotoPage from "./photography"
import VideoPage from "./videos"
import CurriculumVitae from "./cv"

const App = () => {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path="/" exact component={ProfilePage} />
              <Route path="/valhalladenied" exact component={ValhallaDenied} />
              <Route path="/photography" exact component={PhotoPage}/>
              <Route path="/videos" exact component={VideoPage}/>
              <Route path="/cv" exact component={CurriculumVitae}/>
            </Switch>
    </Router>
  )
}

export default App;