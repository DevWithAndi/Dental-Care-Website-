import React, { useRef, useState, useEffect } from "react";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (hasEnded) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setHasEnded(false);
      setIsPlaying(true);
    } else if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setHasStarted(true);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setHasEnded(true);
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Handle user scrubbing
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    if (hasEnded) {
      setHasEnded(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="relative w-full h-full aspect-video">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="//vjs.zencdn.net/v/oceans.mp4"
      ></video>

      {!hasStarted && (
        <div className="">
          <img
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Video poster"
          />
          <button
            className="absolute z-10 text-7xl left-0 right-0 top-0 bottom-0 text-[#0B1D3A] cursor-pointer"
            onClick={togglePlay}
          >
            ▶
          </button>
        </div>
      )}

      {hasStarted && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 flex gap-3 items-center">
          <button onClick={togglePlay}>
            {hasEnded ? "↻" : isPlaying ? "❚❚" : "▶"}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={(e) => {
              const seekTime = (duration * e.target.value) / 100;
              handleSeek({ target: { value: seekTime } });
            }}
            className="flex-1 accent-blue-500 cursor-pointer"
          />
          <span className="text-[16px]">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
