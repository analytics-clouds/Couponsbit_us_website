"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, X, Flame, Volume2, VolumeX } from "lucide-react";

// User-provided individual Left and Right transparent PNG overlays (Desktop)
const LEFT_BORDER_OVERLAY_URL =
  "https://res.cloudinary.com/couponsbit/image/upload/v1791870955/Spooky_Halloween_Border_Overlay_-_left_oo1adh.png";
const RIGHT_BORDER_OVERLAY_URL =
  "https://res.cloudinary.com/couponsbit/image/upload/v1791870955/Spooky_Halloween_Border_Overlay_-_rigth_xvzwkf.png";

// User-provided Mobile Left and Right transparent PNG overlays (Full Height)
const LEFT_MOBILE_BORDER_OVERLAY_URL =
  "https://res.cloudinary.com/couponsbit/image/upload/v1791874132/Glowing_Halloween_Autumn_Tree_Frame_mobie_left_nkh6nd.png";
const RIGHT_MOBILE_BORDER_OVERLAY_URL =
  "https://res.cloudinary.com/couponsbit/image/upload/v1791874132/Glowing_Halloween_Autumn_Tree_Frame_mobie_right_kdsipg.png";

// Horror sound path located in the public directory
const HORROR_SOUND_URL = "/horror-sound.mp3";

interface SeasonProps {
  season?: string;
  enableBorderOverlay?: boolean;
  enableFlyingBats?: boolean;
  enablePurpleFog?: boolean;
  enableSound?: boolean;
  enableButtonGlow?: boolean;
  enableControlsWidget?: boolean;
  className?: string;
}

// Realistic SVG Bat with flapping wings and glowing red eyes
const RealisticBat: React.FC<{
  width?: number;
  height?: number;
  flapSpeed?: number;
}> = ({ width = 58, height = 34, flapSpeed = 0.16 }) => {
  return (
    <motion.div
      animate={{
        scaleY: [1, 0.28, 1],
        y: [0, -3, 0],
      }}
      transition={{
        duration: flapSpeed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width, height }}
      className="relative filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
    >
      <svg
        viewBox="0 0 100 60"
        className="w-full h-full fill-[#0d0718]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 24 
             C46 15 32 7 14 13 
             C22 23 26 31 30 35 
             C22 37 12 43 2 49 
             C18 49 27 43 37 37 
             C43 43 47 47 50 49 
             C53 47 57 43 63 37 
             C73 43 82 49 98 49 
             C88 43 78 37 70 35 
             C74 31 78 23 86 13 
             C68 7 54 15 50 24 Z"
        />
        <path d="M47 22 L44 13 L48 17 L50 16 L52 17 L56 13 L53 22 Z" />
        <circle cx="48" cy="20.5" r="1.5" fill="#ff1a1a" />
        <circle cx="52" cy="20.5" r="1.5" fill="#ff1a1a" />
      </svg>
    </motion.div>
  );
};

export const Season: React.FC<SeasonProps> = ({
  enableBorderOverlay = true,
  enableFlyingBats = true,
  enablePurpleFog = true,
  enableSound = true,
  enableButtonGlow = true,
  enableControlsWidget = true,
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);
  const [effectsActive, setEffectsActive] = useState(true);
  const [widgetDismissed, setWidgetDismissed] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // Audio setup for background horror sound
    if (enableSound) {
      const audio = new Audio(HORROR_SOUND_URL);
      audio.loop = true;
      audio.volume = 0.35; // Atmospheric background volume
      audioRef.current = audio;

      const attemptPlay = () => {
        if (!audioRef.current) return;
        audioRef.current.play().catch(() => {
          // Autoplay blocked by browser policy -> attach listener to first user gesture
          const playOnGesture = () => {
            if (audioRef.current && !isAudioMuted) {
              audioRef.current.play().catch(() => { });
            }
            window.removeEventListener("click", playOnGesture);
            window.removeEventListener("scroll", playOnGesture);
            window.removeEventListener("keydown", playOnGesture);
            window.removeEventListener("touchstart", playOnGesture);
          };

          window.addEventListener("click", playOnGesture, { once: true });
          window.addEventListener("scroll", playOnGesture, { once: true });
          window.addEventListener("keydown", playOnGesture, { once: true });
          window.addEventListener("touchstart", playOnGesture, { once: true });
        });
      };

      attemptPlay();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [enableSound]);

  // Handle Mute/Unmute
  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isAudioMuted) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => { });
      setIsAudioMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsAudioMuted(true);
    }
  };

  // Handle pause/resume effects
  const toggleEffects = () => {
    setEffectsActive((prev) => {
      const next = !prev;
      if (audioRef.current) {
        if (!next) {
          audioRef.current.pause();
        } else if (!isAudioMuted) {
          audioRef.current.play().catch(() => { });
        }
      }
      return next;
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      data-season="halloween"
      className={`season-halloween-root pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* ============================================================== */}
      {/* 1. SELF-CONTAINED GLOBAL STYLES & GOOGLE FONTS                 */}
      {/* ============================================================== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

        .font-creepster {
          font-family: 'Creepster', cursive, system-ui;
          letter-spacing: 0.08em;
          text-shadow: 0 0 10px rgba(255, 90, 0, 0.8), 0 0 20px rgba(168, 85, 247, 0.5), 2px 2px 4px #000;
        }

        /* Site-wide Button & Input Glow */
        ${enableButtonGlow && effectsActive
              ? `
          button:not([data-season-ignore]),
          a.btn:not([data-season-ignore]),
          .btn-primary:not([data-season-ignore]) {
            transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
          }
          button:hover:not([data-season-ignore]),
          a.btn:hover:not([data-season-ignore]),
          .btn-primary:hover:not([data-season-ignore]) {
            box-shadow: 0 0 14px rgba(255, 110, 0, 0.45), 0 0 26px rgba(168, 85, 247, 0.3) !important;
          }
          input:focus, textarea:focus, select:focus {
            box-shadow: 0 0 0 2px rgba(255, 107, 0, 0.4), 0 0 16px rgba(168, 85, 247, 0.25) !important;
            border-color: rgba(255, 107, 0, 0.7) !important;
          }
        `
              : ""
            }

        /* Ambient Candle / Torch Light Flicker */
        @keyframes candleFlickerSubtle {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }
          25% {
            opacity: 0.7;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.38;
            transform: scale(0.93);
          }
          75% {
            opacity: 0.62;
            transform: scale(1.06);
          }
        }

        /* Left, Right & Bottom Atmospheric Fog Keyframes */
        @keyframes rollLeftFog {
          0% { transform: translate3d(-5%, 0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate3d(8%, -8px, 0) scale(1.08); opacity: 0.6; }
          100% { transform: translate3d(-5%, 0, 0) scale(1); opacity: 0.4; }
        }
        @keyframes rollRightFog {
          0% { transform: translate3d(5%, 0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate3d(-8%, -8px, 0) scale(1.08); opacity: 0.6; }
          100% { transform: translate3d(5%, 0, 0) scale(1); opacity: 0.4; }
        }
        @keyframes rollBottomFog {
          0% { transform: translate3d(0, 4px, 0) scale(1); opacity: 0.5; }
          50% { transform: translate3d(0, -10px, 0) scale(1.05); opacity: 0.75; }
          100% { transform: translate3d(0, 4px, 0) scale(1); opacity: 0.5; }
        }
        `,
        }}
      />

      {/* ============================================================== */}
      {/* 2. OVERLAYS: DESKTOP (85% HEIGHT) & MOBILE (FULL HEIGHT)       */}
      {/* ============================================================== */}
      {enableBorderOverlay && effectsActive && (
        <>
          {/* A) DESKTOP OVERLAYS (Screen >= 768px) - 100% UNTOUCHED LAPTOP VIEW */}
          <div className="hidden md:flex fixed bottom-0 left-0 pointer-events-none z-20 items-end">
            <div className="relative">
              <img
                src={LEFT_BORDER_OVERLAY_URL}
                alt="Halloween Tree & Skull Border"
                className="w-auto h-[85vh] max-h-[85vh] max-w-[36vw] sm:max-w-[32vw] lg:max-w-[29vw] object-contain object-left-bottom select-none pointer-events-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
                loading="eager"
              />

              {/* Dynamic Candle Light Glow at Bottom-Left over the Skull & Candles */}
              <div
                className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-48 h-48 rounded-full pointer-events-none filter blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 140, 0, 0.75) 0%, rgba(234, 88, 12, 0.4) 45%, transparent 70%)",
                  animation: "candleFlickerSubtle 2.8s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          <div className="hidden md:flex fixed bottom-0 right-0 pointer-events-none z-20 items-end justify-end">
            <div className="relative">
              <img
                src={RIGHT_BORDER_OVERLAY_URL}
                alt="Halloween Castle & Pumpkins Border"
                className="w-auto h-[85vh] max-h-[85vh] max-w-[36vw] sm:max-w-[32vw] lg:max-w-[29vw] object-contain object-right-bottom select-none pointer-events-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
                loading="eager"
              />

              {/* Dynamic Candle Light Glow at Bottom-Right over Jack-o'-Lanterns */}
              <div
                className="absolute bottom-6 right-6 sm:bottom-12 sm:right-14 w-56 h-56 rounded-full pointer-events-none filter blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 120, 0, 0.8) 0%, rgba(255, 60, 0, 0.4) 50%, transparent 70%)",
                  animation: "candleFlickerSubtle 3.2s ease-in-out infinite 0.5s",
                }}
              />
            </div>
          </div>

          {/* B) MOBILE OVERLAYS (Screen < 768px) - FULL TOP-TO-BOTTOM HEIGHT, NO CROP */}
          {/* Use h-full w-auto so image scales proportionally — never cropped */}
          <div className="flex md:hidden fixed inset-y-0 left-0 pointer-events-none z-20 overflow-hidden">
            <img
              src={LEFT_MOBILE_BORDER_OVERLAY_URL}
              alt="Halloween Mobile Left Border"
              style={{ height: "100%", width: "auto", display: "block", objectFit: "fill" }}
              className="select-none pointer-events-none drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] max-w-none"
              loading="eager"
            />
          </div>

          <div className="flex md:hidden fixed inset-y-0 right-0 pointer-events-none z-20 overflow-hidden justify-end">
            <img
              src={RIGHT_MOBILE_BORDER_OVERLAY_URL}
              alt="Halloween Mobile Right Border"
              style={{ height: "100%", width: "auto", display: "block", objectFit: "fill" }}
              className="select-none pointer-events-none drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] max-w-none"
              loading="eager"
            />
          </div>
        </>
      )}

      {/* ============================================================== */}
      {/* 3. CONTINUOUSLY FLYING BATS ACROSS SCREEN (FRAMER MOTION)      */}
      {/* ============================================================== */}
      {enableFlyingBats && effectsActive && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
          {/* Bat 1: Swooping smoothly across center (Left to Right) */}
          <motion.div
            className="fixed pointer-events-none z-30 select-none"
            initial={{ x: "-12vw", y: "34vh", rotate: 14, opacity: 0 }}
            animate={{
              x: ["-12vw", "24vw", "62vw", "112vw"],
              y: ["34vh", "26vh", "38vh", "22vh"],
              rotate: [14, -8, 12, -4],
              opacity: [0, 0.95, 0.95, 0],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <RealisticBat width={60} height={36} flapSpeed={0.16} />
          </motion.div>

          {/* Bat 2: Swooping across upper-middle (Right to Left) */}
          <motion.div
            className="fixed pointer-events-none z-30 select-none"
            initial={{ x: "112vw", y: "20vh", rotate: -12, opacity: 0 }}
            animate={{
              x: ["112vw", "72vw", "32vw", "-12vw"],
              y: ["20vh", "28vh", "18vh", "24vh"],
              rotate: [-12, 10, -14, 8],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 9.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.5,
            }}
          >
            <div style={{ transform: "scaleX(-1)" }}>
              <RealisticBat width={52} height={32} flapSpeed={0.18} />
            </div>
          </motion.div>

          {/* Bat 3: Diagonal Climber from Bottom-Left towards Top-Right */}
          <motion.div
            className="fixed pointer-events-none z-30 select-none"
            initial={{ x: "-10vw", y: "65vh", rotate: 22, opacity: 0 }}
            animate={{
              x: ["-10vw", "35vw", "75vw", "112vw"],
              y: ["65vh", "44vh", "25vh", "-4vh"],
              rotate: [22, -6, 18, -2],
              opacity: [0, 0.95, 0.95, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6.2,
            }}
          >
            <RealisticBat width={66} height={40} flapSpeed={0.17} />
          </motion.div>

          {/* Bat 4: Fast Agile Bat across Lower Center */}
          <motion.div
            className="fixed pointer-events-none z-30 select-none"
            initial={{ x: "-12vw", y: "48vh", rotate: 10, opacity: 0 }}
            animate={{
              x: ["-12vw", "48vw", "112vw"],
              y: ["48vh", "40vh", "44vh"],
              rotate: [10, -10, 8],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 1.8,
            }}
          >
            <RealisticBat width={46} height={28} flapSpeed={0.15} />
          </motion.div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. ATMOSPHERIC FOG — BOTTOM + LEFT + RIGHT (DESKTOP)           */}
      {/*    BOTTOM ONLY (MOBILE, LIMITED)                               */}
      {/* ============================================================== */}
      {enablePurpleFog && effectsActive && (
        <>
          {/* ── BOTTOM-CENTER FOG: ALL screen sizes (limited on mobile) ── */}
          {/* Desktop: taller; Mobile: short strip only */}
          <div
            className="fixed bottom-0 left-0 w-full pointer-events-none z-40 overflow-hidden"
            style={{ height: "clamp(80px, 14vh, 180px)" }}
          >
            {/* Strong purple violet ground mist */}
            <div
              className="absolute bottom-0 left-0 w-full h-full filter blur-[18px]"
              style={{
                background:
                  "radial-gradient(ellipse 100% 90% at 50% 110%, rgba(109, 40, 217, 0.75), rgba(76, 29, 149, 0.55), transparent 70%)",
                animation: "rollBottomFog 18s ease-in-out infinite alternate",
                mixBlendMode: "multiply",
              }}
            />
            {/* Secondary lighter lavender wisps */}
            <div
              className="absolute bottom-0 left-[10%] w-[80%] h-full filter blur-[26px]"
              style={{
                background:
                  "radial-gradient(ellipse 85% 75% at 50% 105%, rgba(139, 92, 246, 0.65), rgba(167, 139, 250, 0.35), transparent 68%)",
                animation: "rollBottomFog 24s ease-in-out infinite alternate 2s",
                mixBlendMode: "multiply",
              }}
            />
            {/* Amber/orange pumpkin tint in center-bottom */}
            <div
              className="absolute bottom-0 left-[25%] w-[50%] h-[60%] filter blur-[22px]"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(180, 83, 9, 0.35), transparent 65%)",
                animation: "rollBottomFog 30s ease-in-out infinite alternate 4s",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* ── LEFT SIDE FOG: DESKTOP ONLY (md+) ── */}
          <div
            className="hidden md:block fixed bottom-0 left-0 pointer-events-none z-40 overflow-hidden"
            style={{ width: "clamp(200px, 32vw, 420px)", height: "clamp(220px, 38vh, 420px)" }}
          >
            {/* Deep violet primary mist */}
            <div
              className="absolute -bottom-12 -left-12 w-[150%] h-full filter blur-[30px]"
              style={{
                background:
                  "radial-gradient(ellipse 75% 70% at 15% 95%, rgba(109, 40, 217, 0.72), rgba(124, 58, 237, 0.45), transparent 72%)",
                animation: "rollLeftFog 18s ease-in-out infinite alternate",
                mixBlendMode: "multiply",
              }}
            />
            {/* Golden amber candle glow */}
            <div
              className="absolute -bottom-8 -left-6 w-[130%] h-[65%] filter blur-[22px]"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 20% 95%, rgba(217, 119, 6, 0.42), rgba(245, 158, 11, 0.28), transparent 70%)",
                animation: "rollLeftFog 23s ease-in-out infinite alternate 1.5s",
                mixBlendMode: "multiply",
              }}
            />
            {/* Lavender mist surface wisps */}
            <div
              className="absolute -bottom-4 left-0 w-[120%] h-[45%] filter blur-[18px]"
              style={{
                background:
                  "radial-gradient(ellipse 70% 55% at 25% 100%, rgba(167, 139, 250, 0.55), transparent 68%)",
                animation: "rollLeftFog 28s ease-in-out infinite alternate 3s",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* ── RIGHT SIDE FOG: DESKTOP ONLY (md+) ── */}
          <div
            className="hidden md:block fixed bottom-0 right-0 pointer-events-none z-40 overflow-hidden"
            style={{ width: "clamp(200px, 32vw, 420px)", height: "clamp(220px, 38vh, 420px)" }}
          >
            {/* Deep violet primary mist */}
            <div
              className="absolute -bottom-12 -right-12 w-[150%] h-full filter blur-[30px]"
              style={{
                background:
                  "radial-gradient(ellipse 75% 70% at 85% 95%, rgba(109, 40, 217, 0.72), rgba(124, 58, 237, 0.45), transparent 72%)",
                animation: "rollRightFog 18s ease-in-out infinite alternate",
                mixBlendMode: "multiply",
              }}
            />
            {/* Pumpkin orange amber glow */}
            <div
              className="absolute -bottom-8 -right-6 w-[130%] h-[65%] filter blur-[22px]"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 80% 95%, rgba(194, 65, 12, 0.42), rgba(249, 115, 22, 0.3), transparent 70%)",
                animation: "rollRightFog 23s ease-in-out infinite alternate 1.5s",
                mixBlendMode: "multiply",
              }}
            />
            {/* Lavender mist surface wisps */}
            <div
              className="absolute -bottom-4 right-0 w-[120%] h-[45%] filter blur-[18px]"
              style={{
                background:
                  "radial-gradient(ellipse 70% 55% at 75% 100%, rgba(167, 139, 250, 0.55), transparent 68%)",
                animation: "rollRightFog 28s ease-in-out infinite alternate 3s",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </>
      )}

      {/* ============================================================== */}
      {/* 5. SEASON CONTROLS WIDGET WITH AUDIO TOGGLE                    */}
      {/* ============================================================== */}
      {enableControlsWidget && !widgetDismissed && (
        <aside
          aria-label="Halloween Theme Controls"
          className="fixed bottom-5 right-5 z-50 pointer-events-auto flex items-center gap-2 rounded-xl border border-purple-500/40 bg-[#0d071a]/95 px-3 py-1.5 text-white shadow-[0_6px_28px_rgba(168,85,247,0.35)] backdrop-blur-md"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-800 shadow-inner">
            <Flame className="w-3.5 h-3.5 text-purple-200 fill-purple-200 animate-pulse" />
          </div>

          <div className="flex flex-col text-left pr-1">
            <span className="font-creepster text-sm text-purple-300 font-bold leading-none">
              Spooky Season
            </span>
            <span className="text-[9px] text-gray-300 font-medium">
              Halloween Active
            </span>
          </div>

          <div className="flex items-center gap-1 pl-1 border-l border-white/15">
            {/* Audio Mute/Unmute Button */}
            {enableSound && (
              <button
                data-season-ignore="true"
                type="button"
                onClick={toggleSound}
                title={isAudioMuted ? "Unmute horror music" : "Mute horror music"}
                className="p-1 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isAudioMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-red-400" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-green-400" />
                )}
              </button>
            )}

            {/* Toggle Visual Effects */}
            <button
              data-season-ignore="true"
              type="button"
              onClick={toggleEffects}
              title={effectsActive ? "Pause Theme" : "Resume Theme"}
              className="p-1 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {effectsActive ? (
                <Eye className="w-3.5 h-3.5 text-purple-400" />
              ) : (
                <EyeOff className="w-3.5 h-3.5 text-gray-400" />
              )}
            </button>

            {/* Dismiss Widget */}
            <button
              data-season-ignore="true"
              type="button"
              onClick={() => setWidgetDismissed(true)}
              title="Dismiss badge"
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Season;
