"use client";

import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const HeroSection = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const PosterBackground = styled.picture`
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(204, 255, 0, 0.1) 0%,
      transparent 70%
    );
    animation: pulse 8s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  max-width: 900px;

  h1 {
    font-size: 4rem;
    color: ${theme.colors.text.white};
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 20px rgba(204, 255, 0, 0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.7rem;
    color: ${theme.colors.text.white};
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 20px rgba(204, 255, 0, 0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.7rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: ${theme.colors.text.light};
    margin-bottom: 2rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.primary.main};
  font-size: 2rem;
  z-index: 2;
  animation: bounce 2s infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default function Hero() {
  const videoRef = useRef(null);
  const [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator.connection;
    let idleCallback;
    let timeout;
    let disposed = false;

    const cancelPendingVideo = () => {
      if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
      window.clearTimeout(timeout);
    };

    const shouldUsePoster = () =>
      reducedMotion.matches ||
      connection?.saveData ||
      ["slow-2g", "2g"].includes(connection?.effectiveType);

    const loadVideo = () => {
      if (disposed || shouldUsePoster()) return;

      // Choose once after hydration so phones never download the desktop video.
      const source = window.matchMedia("(max-width: 768px)").matches
        ? "/images/hero-video-mobile-optimized.mp4"
        : "/images/hero-video.mp4";
      setVideoSource((current) => current || source);
    };

    const scheduleVideo = () => {
      cancelPendingVideo();
      if (shouldUsePoster()) {
        videoRef.current?.pause();
        setVideoSource(null);
        return;
      }

      // The poster and page content load before this decorative background.
      if ("requestIdleCallback" in window) {
        idleCallback = window.requestIdleCallback(loadVideo, { timeout: 2500 });
      } else {
        timeout = window.setTimeout(loadVideo, 1000);
      }
    };

    const onPreferenceChange = () => {
      if (shouldUsePoster() || document.readyState === "complete") scheduleVideo();
    };

    if (document.readyState === "complete") scheduleVideo();
    else window.addEventListener("load", scheduleVideo, { once: true });

    reducedMotion.addEventListener("change", onPreferenceChange);
    connection?.addEventListener?.("change", onPreferenceChange);

    return () => {
      disposed = true;
      cancelPendingVideo();
      window.removeEventListener("load", scheduleVideo);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      connection?.removeEventListener?.("change", onPreferenceChange);
    };
  }, []);

  useEffect(() => {
    if (!videoSource || !videoRef.current) return;
    videoRef.current.playbackRate = 0.75;
    videoRef.current.play().catch(() => {
      // Browsers can block autoplay; the poster remains a complete background.
    });
  }, [videoSource]);

  return (
    <HeroSection>
      <PosterBackground aria-hidden="true">
        <source
          media="(max-width: 768px)"
          srcSet="/images/hero-video-mobile-poster.webp"
          width="540"
          height="960"
          type="image/webp"
        />
        <img
          src="/images/hero-video-poster.webp"
          width="960"
          height="540"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </PosterBackground>
      {videoSource && (
        <VideoBackground
          ref={videoRef}
          src={videoSource}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
      <VideoOverlay />
      <HeroContent>
        <h1>New Orleans Fishing & Bowfishing Charters</h1>
        <h2>Hooked on Tails — Captain John Styron</h2>
        <p>
          Experience the best of Louisiana fishing. Choose your adventure —
          daytime rod & reel for redfish and speckled trout, or nighttime
          bowfishing in the marshes near New Orleans.
        </p>
      </HeroContent>
      <ScrollIndicator>&#8595;</ScrollIndicator>
    </HeroSection>
  );
}
