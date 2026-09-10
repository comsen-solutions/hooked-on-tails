"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import { trackBookingClick } from "@/lib/analytics";

const Section = styled.section`
  margin: 0;
  padding: 7rem 5%;
  color: #fff;
  background:
    linear-gradient(100deg, rgba(10, 19, 21, 0.96), rgba(10, 19, 21, 0.72)),
    url("/images/rod_n_reel_hero.jpg") center 44% / cover no-repeat;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: end;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

const Eyebrow = styled.p`
  color: ${theme.colors.primary.main};
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  max-width: 760px;
  font-size: clamp(2.6rem, 6vw, 5.4rem);
  line-height: 0.95;
  letter-spacing: -0.055em;
  text-wrap: balance;
`;

const Copy = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  max-width: 56ch;
  margin-top: 1.5rem;
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-width: 290px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: 0;
    width: 100%;
  }
`;

const PrimaryAction = styled(Link)`
  display: inline-flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 0.55rem;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  font-weight: 800;
  transition: transform 220ms ease, box-shadow 220ms ease;

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

const PhoneAction = styled.a`
  display: inline-flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.62);
  border-radius: 0.55rem;
  color: #fff;
  font-weight: 750;
  transition: background 220ms ease, transform 220ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary.main};
    outline-offset: 3px;
  }
`;

export default function FishingBookingCTA() {
  return (
    <Section aria-labelledby="fishing-booking-title">
      <Container>
        <div>
          <Eyebrow>Your date on the water</Eyebrow>
          <Title id="fishing-booking-title">Tell Captain John what you want to catch</Title>
          <Copy>
            Send your preferred date and group size. Captain John will confirm
            availability, the best trip for current conditions, and the deposit.
          </Copy>
        </div>
        <Actions>
          <PrimaryAction
            href="/contact?trip=inshore&source=rod-reel-bottom-cta"
            onClick={() =>
              trackBookingClick({
                tripType: "inshore",
                source: "rod-reel-bottom-cta",
              })
            }
          >
            Request an inshore trip
          </PrimaryAction>
          <PhoneAction
            href="tel:15046280232"
            onClick={() =>
              trackBookingClick({
                tripType: "rod-and-reel",
                source: "rod-reel-bottom-cta",
                action: "phone",
              })
            }
          >
            Call 504-628-0232
          </PhoneAction>
        </Actions>
      </Container>
    </Section>
  );
}
