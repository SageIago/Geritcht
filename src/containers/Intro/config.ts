import { useState, useRef } from "react";

export const [playVideo, setPlayVideo] = useState(false);
// PLAY THE VIDEO
export const VideoRef = useRef<HTMLVideoElement>(null);

const VideoHandler = () => {
  setPlayVideo((previousPlay) => !previousPlay);

  if (playVideo) {
    VideoRef.current?.pause();
  } else {
    VideoRef.current?.play();
  }
};

export default VideoHandler;
