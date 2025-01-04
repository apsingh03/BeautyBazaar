import React from "react";

const VideoPlayer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 rounded-lg">
      <div className="relative overflow-hidden pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/kk0QJgKBf6M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
