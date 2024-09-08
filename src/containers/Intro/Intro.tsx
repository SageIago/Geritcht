import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";
import { useState, useRef } from "react";


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  // PLAY THE VIDEO
  const VideoRef = useRef<HTMLVideoElement>(null);
  
  const VideoHandler = () => {
    setPlayVideo((previousPlay) => !previousPlay);
  
    if (playVideo) {
      VideoRef.current?.pause();
    } else {
      VideoRef.current?.play();
    }
  };
  return (
    <div className="app_video">
      <video
        src={meal}
        muted
        typeof="video/mp4"
        controls={false}
        ref={VideoRef}
        loop
      />

      <div className="app_video_overlay flex_center">
        <div
          className="app_video_overlay_circle flex_center"
          onClick={VideoHandler}
        >
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsPlayFill color="#FFF"  fontSize={30}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
