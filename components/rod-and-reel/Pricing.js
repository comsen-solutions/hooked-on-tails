"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import { trackBookingClick } from "@/lib/analytics";

const PricingSection = styled.section`
  padding: 7rem 5%;
  background: #0b1517;
  color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 3.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const Eyebrow = styled.p`
  color: ${theme.colors.primary.main};
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  text-wrap: balance;
`;

const HeaderCopy = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 1.1rem;
  line-height: 1.75;
  max-width: 60ch;
`;

const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) =>
    props.$featured ? "#f0c735" : "rgba(255, 255, 255, 0.055)"};
  color: ${(props) => (props.$featured ? "#101719" : "#fff")};
  border: 1px solid
    ${(props) =>
      props.$featured ? "#f0c735" : "rgba(255, 255, 255, 0.14)"};
  border-radius: ${(props) => (props.$featured ? "0 2rem 0 0" : "0 0 0 2rem")};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const TripBadge = styled.p`
  align-self: flex-start;
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.74;
  margin-bottom: 2.5rem;
`;

const CardTitle = styled.h3`
  font-size: clamp(1.8rem, 3vw, 2.45rem);
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin-bottom: 0.65rem;
`;

const TripTagline = styled.p`
  min-height: 3.4rem;
  opacity: 0.74;
  line-height: 1.55;
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: clamp(3rem, 6vw, 5.4rem);
  line-height: 1;
  font-weight: 850;
  letter-spacing: -0.055em;
  margin: 2.25rem 0 0.5rem;
  font-variant-numeric: tabular-nums;

  span {
    font-size: 1rem;
    letter-spacing: 0;
    font-weight: 700;
  }
`;

const AdditionalCost = styled.p`
  min-height: 1.6rem;
  opacity: 0.74;
  font-size: 0.95rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 2rem 0 2.25rem;

  li {
    padding: 0.7rem 0;
    border-bottom: 1px solid currentColor;
    border-color: rgba(127, 127, 127, 0.28);
    line-height: 1.45;

    &::before {
      content: "✓";
      display: inline-block;
      width: 1.5rem;
      font-weight: 850;
    }
  }
`;

const CardButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  margin-top: auto;
  padding: 1rem 1.25rem;
  background: ${(props) => (props.$dark ? "#111b1d" : theme.gradients.primary)};
  color: ${(props) => (props.$dark ? "#fff" : theme.colors.text.primary)};
  border-radius: 0.55rem;
  font-weight: 850;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.$dark
        ? "0 10px 30px rgba(8, 17, 19, 0.24)"
        : theme.shadows.goldHover};
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid ${(props) => (props.$dark ? "#fff" : theme.colors.primary.main)};
    outline-offset: 3px;
  }
`;

const SmallPartyNote = styled.p`
  margin: 1.5rem 0 0;
  padding: 1rem 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${theme.colors.primary.main};
  line-height: 1.65;

  a {
    color: ${theme.colors.primary.main};
    font-weight: 750;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`;

const SmallPartyLink = styled.a`
  color: ${theme.colors.primary.main};
  font-weight: 750;
  text-decoration: underline;
  text-underline-offset: 0.2em;

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary.main};
    outline-offset: 3px;
  }
`;

const Policy = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.66);
  font-size: 0.92rem;
  line-height: 1.7;

  p + p {
    margin-top: 0.65rem;
  }
`;

export default function Pricing() {
  return (
    <PricingSection id="pricing" aria-labelledby="fishing-pricing-title">
      <Container>
        <Header>
          <div>
            <Eyebrow>Current charter rates</Eyebrow>
            <SectionTitle id="fishing-pricing-title">Choose your fishing trip</SectionTitle>
          </div>
          <HeaderCopy>
            Start with the water and species that interest your group. Captain
            John will confirm availability and recommend the best option for
            the season and conditions.
          </HeaderCopy>
        </Header>

        <PricingCards>
          <PricingCard $featured>
            <TripBadge>Inshore / most popular</TripBadge>
            <CardTitle>Redfish & speckled trout</CardTitle>
            <TripTagline>Fish the marshes around Hopedale and Lake Borgne.</TripTagline>
            <Price>
              $300 <span>per person</span>
            </Price>
            <AdditionalCost>Three-person minimum · up to five anglers</AdditionalCost>
            <FeatureList>
              <li>About five hours on the water</li>
              <li>Rods, reels, bait, and tackle provided</li>
              <li>Beginner and family friendly</li>
              <li>Fish cleaning available</li>
            </FeatureList>
            <CardButton
              $dark
              href="/contact?trip=inshore&source=rod-reel-pricing"
              onClick={() =>
                trackBookingClick({
                  tripType: "inshore",
                  source: "rod-reel-pricing",
                })
              }
            >
              Request an inshore trip
            </CardButton>
          </PricingCard>

          <PricingCard>
            <TripBadge>Offshore / seasonal</TripBadge>
            <CardTitle>Red snapper</CardTitle>
            <TripTagline>Head into deeper water when the season and conditions allow.</TripTagline>
            <Price>
              $1,600 <span>for four</span>
            </Price>
            <AdditionalCost>+$200 each additional person · up to six anglers</AdditionalCost>
            <FeatureList>
              <li>Offshore trip targeting red snapper</li>
              <li>Rods, reels, bait, and tackle provided</li>
              <li>Four-person minimum</li>
              <li>Fish cleaning available</li>
            </FeatureList>
            <CardButton
              href="/contact?trip=offshore&source=rod-reel-pricing"
              onClick={() =>
                trackBookingClick({
                  tripType: "offshore",
                  source: "rod-reel-pricing",
                })
              }
            >
              Request an offshore trip
            </CardButton>
          </PricingCard>
        </PricingCards>

        <SmallPartyNote>
          Have one or two anglers? The published inshore rate has a three-person
          minimum, but you can {" "}
          <SmallPartyLink
            href="tel:15046280232"
            onClick={() =>
              trackBookingClick({
                tripType: "inshore",
                source: "rod-reel-small-party-note",
                action: "phone",
              })
            }
          >
            call Captain John
          </SmallPartyLink>{" "}
          to ask about availability and private-trip options.
        </SmallPartyNote>

        <Policy>
          <p>A deposit is required to hold your date. Larger groups can be accommodated with three to four boats.</p>
          <p>
            Cancellations made fewer than seven days before the scheduled date
            forfeit the deposit. Cancellations within 24 hours are charged the
            full trip amount. If the captain cancels for weather or unforeseen
            circumstances, the deposit is refunded or the trip is rescheduled
            at no additional cost.
          </p>
        </Policy>
      </Container>
    </PricingSection>
  );
}
