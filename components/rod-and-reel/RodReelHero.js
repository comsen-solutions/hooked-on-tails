"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import { trackBookingClick } from "@/lib/analytics";

const HeroSection = styled.section`
  min-height: 100dvh;
  width: 100%;
  padding: 8.5rem 5% 4rem;
  background-image:
    linear-gradient(
      90deg,
      rgba(8, 17, 19, 0.92) 0%,
      rgba(8, 17, 19, 0.76) 44%,
      rgba(8, 17, 19, 0.32) 100%
    ),
    url("/images/rod_n_reel_hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 28%;
    background: linear-gradient(transparent, rgba(5, 12, 14, 0.42));
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 100dvh;
    padding: 7.5rem 1.25rem 7rem;
    background-position: 58% center;
    background-image:
      linear-gradient(rgba(8, 17, 19, 0.76), rgba(8, 17, 19, 0.82)),
      url("/images/rod_n_reel_hero.jpg");
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Copy = styled.div`
  max-width: 760px;
`;

const Eyebrow = styled.p`
  color: ${theme.colors.primary.main};
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: #fff;
  font-size: clamp(3.35rem, 7.5vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  max-width: 9.5ch;
  margin-bottom: 1.75rem;
  text-wrap: balance;
  text-shadow: 0 12px 42px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(3.25rem, 15vw, 5rem);
    max-width: 8ch;
  }
`;

const Description = styled.p`
  max-width: 58ch;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.08rem, 2vw, 1.35rem);
  line-height: 1.65;
  margin-bottom: 2.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.85rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: stretch;
    flex-direction: column;
  }
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  padding: 1rem 1.55rem;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  border-radius: 0.55rem;
  font-size: 1.05rem;
  font-weight: 800;
  transition: transform 220ms ease, box-shadow 220ms ease;
  box-shadow: ${theme.shadows.gold};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.goldHover};
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
`;

const PhoneButton = styled.a`
  display: inline-flex;
  justify-content: center;
  padding: calc(1rem - 1px) 1.55rem;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 0.55rem;
  font-size: 1.05rem;
  font-weight: 750;
  transition: transform 220ms ease, background 220ms ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary.main};
    outline-offset: 3px;
  }
`;

const TrustLine = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.5rem;
  list-style: none;
  margin-top: 2.5rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.92rem;
  font-weight: 650;

  li::before {
    content: "•";
    color: ${theme.colors.primary.main};
    margin-right: 0.55rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: grid;
    gap: 0.5rem;
    margin-top: 1.75rem;
  }
`;

export default function RodReelHero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Copy>
          <Eyebrow>Daytime inshore & offshore trips</Eyebrow>
          <Title>New Orleans fishing charters</Title>
          <Description>
            Fish Louisiana's coastal marshes for redfish and speckled trout, or
            head offshore for red snapper when conditions allow. Captain John
            provides the gear and local guidance for beginners, families, and
            experienced anglers.
          </Description>
          <ButtonGroup>
            <CtaButton
              href="/contact?trip=inshore&source=rod-reel-hero"
              onClick={() =>
                trackBookingClick({
                  tripType: "inshore",
                  source: "rod-reel-hero",
                })
              }
            >
              Request an inshore trip
            </CtaButton>
            <PhoneButton
              href="tel:15046280232"
              onClick={() =>
                trackBookingClick({
                  tripType: "rod-and-reel",
                  source: "rod-reel-hero",
                  action: "phone",
                })
              }
            >
              Call 504-628-0232
            </PhoneButton>
          </ButtonGroup>
          <TrustLine aria-label="Trip inclusions">
            <li>Rods, reels, bait & tackle</li>
            <li>Fish cleaning available</li>
            <li>No experience required</li>
          </TrustLine>
        </Copy>
      </HeroContent>
    </HeroSection>
  );
}
