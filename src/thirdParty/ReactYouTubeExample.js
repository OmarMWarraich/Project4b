import React, { Component } from 'react'
import YouTube from 'react-youtube'


// https://youtu.be/1ueN1y_ycuc
// https://www.youtube.com/watch?v=1ueN1y_ycuc

class ReactYouTubeExample extends Component {
  videoOnReady (event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
    console.log(event.target)
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }
    const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        />
        )
    }
}
  
export default ReactYouTubeExample;
