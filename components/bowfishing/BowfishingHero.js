"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import { trackBookingClick } from "@/lib/analytics";

const HeroSection = styled.section`
  min-height: 100svh;
  width: 100%;
  padding: 8rem 0 4rem;
  background-image: linear-gradient(
      rgba(26, 26, 26, 0.7),
      rgba(42, 42, 42, 0.8)
    ),
    url("/images/bowfish_boat.webp");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    background-image: linear-gradient(
        rgba(26, 26, 26, 0.7),
        rgba(42, 42, 42, 0.8)
      ),
      url("/images/bowfish_boat-small.webp");
  }

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

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 1.5rem;
  width: 100%;
  max-width: 1000px;

  h1 {
    font-size: clamp(2.35rem, 5.5vw, 4rem);
    line-height: 1.12;
    color: #fff;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 20px rgba(255, 215, 0, 0.5);

  }

  p {
    font-size: 1.5rem;
    color: #ccc;
    max-width: 760px;
    margin: 0 auto 1.5rem;
    line-height: 1.6;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const TripSummary = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 2rem auto 1.25rem;
  max-width: 850px;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(255, 215, 0, 0.45);
  border-bottom: 1px solid rgba(255, 215, 0, 0.45);
  gap: 1.25rem 1rem;

  dt {
    color: ${theme.colors.text.light};
    font-size: 0.9rem;
    margin-bottom: 0.35rem;
  }

  dd {
    color: ${theme.colors.primary.main};
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const IncludedNote = styled.div`
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 auto 1.75rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 5px 30px rgba(255, 215, 0, 0.4);

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 4px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.6);
  }
`;

const PhoneButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s;

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary.main};
    outline-offset: 4px;
  }

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default function BowfishingHero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        <h1>New Orleans Bowfishing Charters</h1>
        <p>
          Explore the Louisiana marsh at night with Captain John Styron.
          Spot redfish, drum, and gar under the boat lights, with all the gear
          and guidance you need for your first shot.
        </p>
        <TripSummary aria-label="Bowfishing trip at a glance">
          <div><dt>Per person</dt><dd>$250</dd></div>
          <div><dt>Group size</dt><dd>4–6 guests</dd></div>
          <div><dt>Trip duration</dt><dd>4–4.5 hours</dd></div>
          <div><dt>Welcome aboard</dt><dd>Ages 8+</dd></div>
        </TripSummary>
        <IncludedNote>
          Gear, instruction &amp; fish cleaning included.<br />
          4-person minimum · $1,000 minimum trip total
        </IncludedNote>
        <ButtonGroup>
          <CtaButton
            href="/contact?trip=bowfishing&source=bowfishing-hero"
            onClick={() =>
              trackBookingClick({
                tripType: "bowfishing",
                source: "bowfishing-hero",
              })
            }
          >
            Check Bowfishing Dates
          </CtaButton>
          <PhoneButton
            href="tel:15046280232"
            onClick={() =>
              trackBookingClick({
                tripType: "bowfishing",
                source: "bowfishing-hero",
                action: "phone",
              })
            }
          >
            Call 504-628-0232
          </PhoneButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
}
