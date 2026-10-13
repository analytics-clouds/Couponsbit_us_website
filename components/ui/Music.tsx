"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicProps {
  /** Path or URL to the audio file */
  src: string;
  /** Volume level 0–1 (default: 0.3) */
  volume?: number;
  /** Whether to loop the audio (default: true) */
  loop?: boolean;
  /** Show a small floating mute/unmute button (default: true) */
  showControl?: boolean;
}

/**
 * Music — plays background audio continuously while the user stays on the site.
 * - Audio starts on the first user interaction (click / scroll / key / touch)
 *   because browsers block autoplay without a prior user gesture.
 * - Lives in layout.tsx so it never unmounts during client-side page navigation.
 * - A small mute/unmute pill sits in the bottom-left corner.
 */
export const Music: React.FC<MusicProps> = ({
  src,
  volume = 0.3,
  loop = true,
  showControl = true,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const startedRef = useRef(false);

  /* ── Bootstrap audio on mount — runs only once ── */
  useEffect(() => {
    if (audioRef.current) return;

    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    audio.preload = "auto";
    audioRef.current = audio;

    const startOnGesture = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().catch(() => {});
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("click",      startOnGesture);
      window.removeEventListener("scroll",     startOnGesture);
      window.removeEventListener("keydown",    startOnGesture);
      window.removeEventListener("touchstart", startOnGesture);
    };

    /* Try immediate autoplay first */
    audio.play().then(() => {
      startedRef.current = true;
    }).catch(() => {
      /* Autoplay blocked → wait for first user gesture */
      window.addEventListener("click",      startOnGesture, { once: true });
      window.addEventListener("scroll",     startOnGesture, { once: true });
      window.addEventListener("keydown",    startOnGesture, { once: true });
      window.addEventListener("touchstart", startOnGesture, { once: true });
    });

    return () => {
      cleanup();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — run once only

  /* ── Sync volume prop changes ── */
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  /* ── Mute / Unmute ── */
  const toggleMute = () => {
    if (!audioRef.current) return;
    const next = !isMuted;
    audioRef.current.muted = next;

    // If unmuting and audio hasn't started yet, kick it off now
    if (!next && !startedRef.current) {
      audioRef.current.play().catch(() => {});
      startedRef.current = true;
    }

    setIsMuted(next);
  };

  if (!showControl) return null;

  return (
    <>
      <style>{`
        @keyframes musicBar1 {
          0%   { height: 30%; }
          100% { height: 100%; }
        }
        @keyframes musicBar2 {
          0%   { height: 100%; }
          100% { height: 25%; }
        }
        @keyframes musicBar3 {
          0%   { height: 55%; }
          100% { height: 95%; }
        }
        @keyframes musicBar4 {
          0%   { height: 80%; }
          100% { height: 20%; }
        }
      `}</style>

      <button
        id="music-mute-toggle"
        type="button"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        title={isMuted ? "Unmute horror music" : "Mute horror music"}
        onClick={toggleMute}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-[#0d071a]/90 px-3 py-1.5 text-white shadow-[0_4px_20px_rgba(168,85,247,0.3)] backdrop-blur-md transition-all duration-200 hover:bg-[#150a2e]/95 hover:shadow-[0_4px_24px_rgba(168,85,247,0.55)] active:scale-95 pointer-events-auto select-none"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="text-[10px] font-semibold text-red-300 leading-none">Muted</span>
          </>
        ) : (
          <>
            {/* Animated sound-wave bars */}
            <span className="relative flex items-end gap-[2px] w-4 h-3.5 shrink-0" aria-hidden="true">
              <span className="absolute bottom-0 w-[3px] bg-purple-400 rounded-full" style={{ left: 0,  animation: "musicBar1 0.9s ease-in-out infinite alternate" }} />
              <span className="absolute bottom-0 w-[3px] bg-purple-300 rounded-full" style={{ left: 5,  animation: "musicBar2 0.7s ease-in-out infinite alternate" }} />
              <span className="absolute bottom-0 w-[3px] bg-purple-400 rounded-full" style={{ left: 10, animation: "musicBar3 1.1s ease-in-out infinite alternate" }} />
              <span className="absolute bottom-0 w-[3px] bg-purple-200 rounded-full" style={{ left: 15, animation: "musicBar4 0.8s ease-in-out infinite alternate 0.2s" }} />
            </span>
            <Volume2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
            <span className="text-[10px] font-semibold text-purple-300 leading-none">Music</span>
          </>
        )}
      </button>
    </>
  );
};

export default Music;
