"use client";

import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const HeroSection = styled.section`
  height: 100vh;
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
    margin-bottom: 1rem;
    text-shadow: 2px 2px 20px rgba(204, 255, 0, 0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
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
`;

export default function Hero() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport is mobile-sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      // Reload the video when isMobile changes
      videoRef.current.load();
    }
  }, [isMobile]);

  return (
    <HeroSection>
      <VideoBackground ref={videoRef} autoPlay loop muted playsInline>
        <source
          src={
            isMobile
              ? "/images/hero-video-mobile.mp4"
              : "/images/hero-video.mp4"
          }
          type="video/mp4"
        />
      </VideoBackground>
      <VideoOverlay />
      <HeroContent>
        <h1>Hooked on Tails</h1>
        <p>
          Experience the best of Louisiana fishing with Captain John Styron.
          Choose your adventure - daytime rod & reel or nighttime bowfishing.
        </p>
      </HeroContent>
      <ScrollIndicator>&#8595;</ScrollIndicator>
    </HeroSection>
  );
}
