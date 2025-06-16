import React from 'react';
import './VideoPlayer.css';
import Video from '/Videos/bali.mp4'

const VideoPlayer = ({ src, title, description }) => {
  return (
    <div className="video-container">
        <h1>A Holiday you have to remember</h1>
      <div className="video-wrapper">
        {/* <video controls className="travel-video">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <video src={Video} autoPlay loop controls className="travel-video">
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;