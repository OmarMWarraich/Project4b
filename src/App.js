import React, { Component } from 'react'

import ReactYouTubeExample from './thirdParty/ReactYouTubeExample'

import './App.css'

// https://youtu.be/1ueN1y_ycuc
// https://www.youtube.com/watch?v=1ueN1y_ycuc

class App extends Component {
  render () {
    return (
      <div className = 'App'>
        <ReactYouTubeExample videoId='1ueN1y_ycuc' />
      </div>
    )
  }
}

export default App;
