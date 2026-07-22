"use client";

import { useRef, useState } from "react";

type AudioPlayerProps = { title: string; originalTitle: string; artist: string; src?: string };

export function AudioPlayer({ title, originalTitle, artist, src }: AudioPlayerProps) {
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
      <button type="button" className="play-button" onClick={togglePlayback} disabled={!src} aria-label={src ? `${isPlaying ? "暂停 Pause" : "播放 Play"} ${title}` : "音频待授权 Audio pending approval"}>
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
      </button>
      <div className="track-copy"><p>{originalTitle}</p><h3>{title}</h3><small>{artist}</small></div>
      <div className="track-progress" aria-hidden="true"><i /></div>
      <p className="audio-status">{src ? "已授权母带 · Authorised master" : "母带待授权 · Master audio pending"}</p>
      {src ? <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} /> : null}
    </div>
  );
}
