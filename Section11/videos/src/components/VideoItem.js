import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
        {video.snippet.title}
      </a>
    </div>
  );
};

export default VideoItem;
