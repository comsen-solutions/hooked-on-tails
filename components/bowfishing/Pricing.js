"use client";

import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { trackBookingClick } from "@/lib/analytics";

const PricingSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.gradients.dark};
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background: ${theme.gradients.primary};
    margin: 1rem auto;
    border-radius: 2px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 2rem;
`;

const PricingCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid rgba(255, 215, 0, 0.3);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3);
  }

  h3 {
    color: ${theme.colors.primary.main};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text.light};
    line-height: 1.6;
  }

  a {
    color: ${theme.colors.primary.main};
    text-underline-offset: 3px;
  }

  ul {
    list-style: none;
    margin: 1.5rem 0;

    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &::before {
        content: "✓ ";
        color: ${theme.colors.primary.main};
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${theme.colors.primary.main};
`;

const Note = styled.div`
  text-align: left;
  margin-top: 2rem;
  font-size: 1rem;
  line-height: 1.7;

  p {
    margin: 0.5rem 0;
  }
`;

const BookingLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  padding: 1rem 1.75rem;
  margin-top: 1.5rem;
  border-radius: 50px;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  font-weight: 700;
  text-decoration: none;

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 4px;
  }
`;

export default function Pricing() {
  return (
    <PricingSection id="pricing">
      <SectionTitle>Bowfishing Prices &amp; Trip Details</SectionTitle>
      <PricingCards>
        <PricingCard>
          <h3>Per Person</h3>
          <Price>$250</Price>
          <p>$1,000 minimum trip total for 4 guests.</p>
          <ul>
            <li>4-person minimum · 6-person maximum</li>
            <li>5 guests: $1,250 · 6 guests: $1,500</li>
            <li>All equipment included</li>
            <li>Fish cleaning service</li>
            <li>Full instruction</li>
          </ul>
        </PricingCard>

        <PricingCard>
          <h3>Trip Duration</h3>
          <Price>
            4–4.5 <span style={{ fontSize: "1.5rem" }}>hrs</span>
          </Price>
          <ul>
            <li>Evening departure</li>
            <li>Nighttime fishing under the lights</li>
            <li>Launch location confirmed by Captain John</li>
            <li>Meeting time confirmed before departure</li>
            <li>Trips are weather permitting</li>
          </ul>
        </PricingCard>

        <PricingCard>
          <h3>What to Bring</h3>
          <Price style={{ fontSize: "2rem" }}>Checklist</Price>
          <ul>
            <li>Valid fishing license or charter passenger license</li>
            <li>Your own food & drinks</li>
            <li>Ice chest to take home your catch</li>
            <li>Non-marking shoes</li>
            <li>Weather-appropriate clothing</li>
          </ul>
          <p>
            The Louisiana 3-day saltwater charter passenger license is $20.
            Existing licenses and age exemptions may apply. {" "}
            <a href="https://support.louisianaoutdoors.com/hc/en-us/articles/38752299858836-Adult-Non-Residents-Available-3-or-5-Day-Fishing-Licenses-For-Purchase" target="_blank" rel="noopener noreferrer">
              Check LDWF license requirements
            </a>.
          </p>
        </PricingCard>
      </PricingCards>

      <Note>
        <p><strong>Reserve your date:</strong> A $250 deposit is required.</p>
        <p style={{ marginTop: "1rem" }}>
          <strong>More than 6 guests?</strong> Ask Captain John about coordinating
          a larger group across 3–4 boats and confirm availability before booking.
        </p>
        <p>
          <strong>Cancellation policy:</strong> Cancellations made less than 7 days prior to your scheduled date
          will result in forfeiture of your deposit. Cancellations made within
          24 hours of your scheduled trip will be charged the full trip amount.
        </p>
        <p>
          If the captain cancels the trip due to weather or other unforeseen
          circumstances, a full refund of the deposit will be given or the trip
          will be rescheduled at no additional cost.
        </p>
        <BookingLink
          href="/contact?trip=bowfishing&source=bowfishing-pricing"
          onClick={() => trackBookingClick({ tripType: "bowfishing", source: "bowfishing-pricing" })}
        >
          Request Your Bowfishing Date
        </BookingLink>
      </Note>
    </PricingSection>
  );
}
