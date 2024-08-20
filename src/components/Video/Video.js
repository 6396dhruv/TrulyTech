import React from 'react'
import './Video.css'
import video from '../../Images/video.mp4'
const Video = ({play, setPlay}) => {
  return (
    <div className={`videoplay ${play? '': 'hide'}`}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Video
