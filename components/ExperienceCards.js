'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { trackEvent } from '@/lib/analytics'

const ExperiencesSection = styled.section`
  padding: 6rem 5%;
  background: ${theme.gradients.light};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${theme.colors.text.primary};
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

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.text.white};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  transition: all 0.4s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.cardHover};
  }
`

const CardImage = styled.div`
  height: 280px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${theme.colors.background.dark};
`

const TimeBadge = styled.span`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  color: ${theme.colors.text.primary};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.large};
  font-weight: bold;
  font-size: 0.9rem;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;

  h3 {
    font-size: 1.8rem;
    color: ${theme.colors.text.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`

const TripSummary = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 0 0 1.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e2d8;
  font-variant-numeric: tabular-nums;

  dt {
    color: ${theme.colors.text.secondary};
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
  }

  dd {
    color: ${theme.colors.text.primary};
    font-weight: 600;
    margin: 0;
    line-height: 1.5;
  }
`

const CardFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const FeatureTag = styled.span`
  background: linear-gradient(135deg, #e9ecef, #f8f9fa);
  color: ${theme.colors.text.secondary};
  padding: 0.4rem 0.8rem;
  border-radius: ${theme.borderRadius.medium};
  font-size: 0.85rem;
  border: 1px solid #dee2e6;
`

const CardButton = styled(Link)`
  display: inline-block;
  margin-top: auto;
  width: 100%;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: ${theme.borderRadius.large};
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;
  background: ${props => props.$variant === 'day'
    ? theme.gradients.primary
    : 'linear-gradient(135deg, #ffd700, #d4a600)'};
  color: ${theme.colors.text.primary};
  box-shadow: ${theme.shadows.gold};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.goldHover};
  }
`

export default function ExperienceCards() {
  return (
    <ExperiencesSection id="experiences">
      <Container>
        <SectionTitle>Choose Your Adventure</SectionTitle>
        <SectionSubtitle>
          Two unique ways to experience the Louisiana marshes with an expert local guide
        </SectionSubtitle>

        <CardsGrid>
          <Card>
            <CardImage>
              <Image
                src="/images/rod_n_reel_hero.webp"
                alt="Daytime fishing in the Louisiana marshes"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1400px) 42vw, 560px"
                style={{ objectFit: 'cover' }}
              />
              <TimeBadge>Daytime</TimeBadge>
            </CardImage>
            <CardContent>
              <h3>Rod & Reel Fishing</h3>
              <p>
                Fish for redfish and speckled trout with Captain John. Rods, reels, bait, and tackle are provided, with guidance for first-time anglers.
              </p>
              <CardFeatures>
                <FeatureTag>Redfish</FeatureTag>
                <FeatureTag>Speckled Trout</FeatureTag>
                <FeatureTag>All Skill Levels</FeatureTag>
                <FeatureTag>Family Friendly</FeatureTag>
              </CardFeatures>
              <TripSummary>
                <div><dt>Inshore rate</dt><dd>$300 per person</dd></div>
                <div><dt>Group size</dt><dd>3–5 anglers</dd></div>
                <div><dt>Time on the water</dt><dd>About 5 hours</dd></div>
                <div><dt>Minimum trip</dt><dd>$900 for 3</dd></div>
              </TripSummary>
              <CardButton
                href="/rod-and-reel"
                $variant="day"
                onClick={() =>
                  trackEvent("experience_selected", {
                    experience: "rod-and-reel",
                    link_source: "homepage-experience-card",
                  })
                }
              >
                New Orleans Fishing Charters
              </CardButton>
            </CardContent>
          </Card>

          <Card>
            <CardImage>
              <Image
                src="/images/bowfish_boat.webp"
                alt="Hooked on Tails boat ready for a nighttime bowfishing charter"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1400px) 42vw, 560px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              <TimeBadge>Nighttime</TimeBadge>
            </CardImage>
            <CardContent>
              <h3>Night Bowfishing</h3>
              <p>
                Explore the marsh after dark from a boat equipped with lights. Captain John provides the bows, equipment, and instruction. No experience needed.
              </p>
              <CardFeatures>
                <FeatureTag>Alligator Gar</FeatureTag>
                <FeatureTag>Drum</FeatureTag>
                <FeatureTag>Night Adventure</FeatureTag>
                <FeatureTag>No Experience Needed</FeatureTag>
              </CardFeatures>
              <TripSummary>
                <div><dt>Bowfishing rate</dt><dd>$250 per person</dd></div>
                <div><dt>Group size</dt><dd>4–6 guests</dd></div>
                <div><dt>Time on the water</dt><dd>4–4.5 hours</dd></div>
                <div><dt>Minimum trip</dt><dd>$1,000 for 4</dd></div>
              </TripSummary>
              <CardButton
                href="/bowfishing"
                $variant="night"
                onClick={() =>
                  trackEvent("experience_selected", {
                    experience: "bowfishing",
                    link_source: "homepage-experience-card",
                  })
                }
              >
                New Orleans Bowfishing Charters
              </CardButton>
            </CardContent>
          </Card>
        </CardsGrid>
      </Container>
    </ExperiencesSection>
  )
}
