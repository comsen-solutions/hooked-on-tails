"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      rgba(26, 26, 26, 0.7),
      rgba(42, 42, 42, 0.8)
    ),
    url("/images/bowfish_boat.png");
  background-size: cover;
  background-position: center top;
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
    color: #ccc;
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
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.6);
  }
`;

export default function BowfishingHero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        <h1>Night Bowfishing Adventures</h1>
        <p>
          Experience the Louisiana marshes like never before. Hunt alligator
          gar, redfish, and more under the stars with an expert guide.
        </p>
        {/* <CtaButton href="#contact">Book Your Trip</CtaButton> */}
      </HeroContent>
    </HeroSection>
  );
}
