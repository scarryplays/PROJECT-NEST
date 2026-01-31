import bgVideo from '../assets/bkgvideo.mp4';
import "../style/bgvideo.css"

export const VideoBackground =()=> {
  return (
    <video autoPlay loop muted className="bg-video">
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}

// export default VideoBackground;
