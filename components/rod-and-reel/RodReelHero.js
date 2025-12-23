"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      rgba(26, 26, 26, 0.6),
      rgba(26, 26, 26, 0.7)
    ),
    url("/images/rod_n_reel_hero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 215, 0, 0.1) 0%,
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
    color: #fff;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 20px rgba(255, 215, 0, 0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const CtaButton = styled(Link)`
  display: inline-block;
  padding: 1rem 3rem;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 5px 30px rgba(255, 215, 0, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.5);
  }
`;

export default function RodReelHero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        <h1>Rod & Reel Fishing</h1>
        <p>
          Experience classic Louisiana fishing in the beautiful coastal marshes.
          Target redfish, speckled trout, and more with an expert local guide.
        </p>
        {/* <CtaButton href="#contact">Book Your Trip</CtaButton> */}
      </HeroContent>
    </HeroSection>
  );
}
