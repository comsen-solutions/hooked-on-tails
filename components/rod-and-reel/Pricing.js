"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
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
    box-shadow: 0 20px 60px rgba(255, 215, 0, 0.2);
  }

  h3 {
    color: ${theme.colors.primary.main};
    font-size: 1.5rem;
    margin-bottom: 1rem;
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

const TripBadge = styled.div`
  display: inline-block;
  background: ${(props) =>
    props.$variant === "inshore"
      ? "linear-gradient(135deg, #ffd700, #ffb800)"
      : "linear-gradient(135deg, #ffb800, #d4a600)"};
  color: ${theme.colors.text.primary};
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TripTagline = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${theme.colors.primary.main};
`;

const AdditionalCost = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const Note = styled.div`
  text-align: left;
  margin-top: 3rem;
  font-size: 1rem;

  p {
    margin: 0.5rem 0;
  }
`;

export default function Pricing() {
  return (
    <PricingSection id="pricing">
      <SectionTitle>Our Trips</SectionTitle>
      <PricingCards>
        <PricingCard>
          <TripBadge $variant="inshore">Inshore</TripBadge>
          <h3>Redfish & Trout</h3>
          <TripTagline>Fish the beautiful Louisiana marshes</TripTagline>
          <Price>
            $300
            <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
              /person
            </span>
          </Price>
          <ul>
            <li>Target redfish & speckled trout</li>
            <li>3 person minimum</li>
            <li>5 person maximum</li>
            <li>All equipment provided</li>
            <li>Bait and tackle included</li>
            <li>Fish cleaning available</li>
          </ul>
        </PricingCard>

        <PricingCard>
          <TripBadge $variant="offshore">Offshore</TripBadge>
          <h3>Red Snapper</h3>
          <TripTagline>Head out to deeper waters</TripTagline>
          <Price>
            $1,600
            <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
              /4 people
            </span>
          </Price>
          <AdditionalCost>+$200 per additional person</AdditionalCost>
          <ul>
            <li>Target red snapper</li>
            <li>4 person minimum</li>
            <li>6 person maximum</li>
            <li>All equipment provided</li>
            <li>Bait and tackle included</li>
            <li>Fish cleaning available</li>
          </ul>
        </PricingCard>
      </PricingCards>

      <Note>
        <p>- Deposit required to hold your date</p>
        <p style={{ marginTop: "1rem" }}>
          - Can accommodate larger groups with 3-4 boats
        </p>
        <p>
          - Cancellations made less than 7 days prior to your scheduled date
          will result in forfeiture of your deposit. Cancellations made within
          24 hours of your scheduled trip will be charged the full trip amount.
        </p>
        <p>
          - If captain cancels the trip due to weather or other unforeseen
          circumstances, a full refund of the deposit will be given or the trip
          will be rescheduled at no additional cost.
        </p>
      </Note>
    </PricingSection>
  );
}
