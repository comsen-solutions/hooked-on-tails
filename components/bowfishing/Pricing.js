'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'

const PricingSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.gradients.dark};
  color: #fff;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
  position: relative;

  &::after {
    content: '';
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
`

const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

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
`

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${theme.colors.primary.main};
`

const Note = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;

  p {
    margin: 0.5rem 0;
  }
`

export default function Pricing() {
  return (
    <PricingSection id="pricing">
      <SectionTitle>Trip Details</SectionTitle>
      <PricingCards>
        <PricingCard>
          <h3>Cost Per Person</h3>
          <Price>$250</Price>
          <ul>
            <li>4 person minimum</li>
            <li>6 person maximum</li>
            <li>All equipment included</li>
            <li>Fish cleaning service</li>
            <li>Full instruction</li>
          </ul>
        </PricingCard>

        <PricingCard>
          <h3>Trip Duration</h3>
          <Price>
            4-4.5<span style={{ fontSize: '1.5rem' }}>hrs</span>
          </Price>
          <ul>
            <li>Evening departure</li>
            <li>Night fishing adventure</li>
            <li>Patriot Lodge launch</li>
            <li>Weather permitting</li>
            <li>Safety is priority</li>
          </ul>
        </PricingCard>

        <PricingCard>
          <h3>What to Bring</h3>
          <Price style={{ fontSize: '2rem' }}>Checklist</Price>
          <ul>
            <li>$20 / 3-day charter pass</li>
            <li>Your own food & drinks</li>
            <li>Ice chest for storage</li>
            <li>Typical fishing attire</li>
            <li>Dress for the weather</li>
          </ul>
        </PricingCard>
      </PricingCards>

      <Note>
        <p>$250 deposit required to hold your date</p>
        <p style={{ marginTop: '1rem' }}>
          Can accommodate larger groups with 3-4 boats
        </p>
      </Note>
    </PricingSection>
  )
}
