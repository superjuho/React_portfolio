import React from "react";
import ProfilePage from './profilepage'
import {BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom'
import "./App.css"
import ValhallaDenied from "./valhalladenied"
import PhotoPage from "./photography"
import VideoPage from "./videos";

const App = () => {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <Routes>
              <Route path="/" exact component={ProfilePage} />
              <Route path="/valhalladenied" exact component={ValhallaDenied} />
              <Route path="/photography" exact component={PhotoPage}/>
              <Route path="/videos" exact component={VideoPage}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;