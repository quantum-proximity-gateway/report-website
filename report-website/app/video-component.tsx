import React from 'react';

interface VideoProps {
  title: string;
  videoUrl: string;
}

const VideoComponent: React.FC<VideoProps> = ({ title, videoUrl }) => {
  return (
    <div className="video-container">
      <h2>{title}</h2>
      <video controls width="600">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
