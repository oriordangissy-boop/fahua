"use client";

import { useRef, useState } from "react";

type AudioPlayerProps = { title: string; artist: string; src?: string };

export function AudioPlayer({ title, artist, src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    if (!src || !audioRef.current) return;
    if (audioRef.current.paused) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-player">
      <button type="button" className="play-button" onClick={togglePlayback} disabled={!src} aria-label={src ? `${isPlaying ? "Pause" : "Play"} ${title}` : "Audio unavailable until the relevant permissions are in place"}>
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
      </button>
      <div className="track-copy"><h3>{title}</h3><small>{artist}</small></div>
      <div className="track-progress" aria-hidden="true"><i /></div>
      <p className="audio-status">{src ? "Audio available" : "Audio will open when permissions are in place"}</p>
      {src ? <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} /> : null}
    </div>
  );
}
