'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/lib/theme'

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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: ${props => props.$variant === 'day' 
    ? 'linear-gradient(rgba(255, 215, 0, 0.3), rgba(255, 184, 0, 0.4)), url("/images/rod_n_reel_hero.png")'
    : 'linear-gradient(rgba(26, 26, 26, 0.5), rgba(42, 42, 42, 0.6)), url("/images/bowfish_boat.png")'};
  background-size: cover;
  background-position: ${props => props.$variant === 'day' ? 'center' : 'center top'};
`

const TimeBadge = styled.span`
  position: absolute;
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
    <ExperiencesSection>
      <Container>
        <SectionTitle>Choose Your Adventure</SectionTitle>
        <SectionSubtitle>
          Two unique ways to experience the Louisiana marshes with an expert local guide
        </SectionSubtitle>

        <CardsGrid>
          <Card>
            <CardImage $variant="day">
              <TimeBadge>Daytime</TimeBadge>
            </CardImage>
            <CardContent>
              <h3>Rod & Reel Fishing</h3>
              <p>
                Classic Louisiana fishing at its finest. Target redfish, speckled trout, and more in the beautiful coastal marshes.
              </p>
              <CardFeatures>
                <FeatureTag>Redfish</FeatureTag>
                <FeatureTag>Speckled Trout</FeatureTag>
                <FeatureTag>All Skill Levels</FeatureTag>
                <FeatureTag>Family Friendly</FeatureTag>
              </CardFeatures>
              <CardButton href="/rod-and-reel" $variant="day">
                Explore Fishing Trips
              </CardButton>
            </CardContent>
          </Card>

          <Card>
            <CardImage $variant="night">
              <TimeBadge>Nighttime</TimeBadge>
            </CardImage>
            <CardContent>
              <h3>Night Bowfishing</h3>
              <p>
                An unforgettable nighttime adventure. Hunt alligator gar, redfish, and more under the stars with bow and arrow.
              </p>
              <CardFeatures>
                <FeatureTag>Alligator Gar</FeatureTag>
                <FeatureTag>Drum</FeatureTag>
                <FeatureTag>Night Adventure</FeatureTag>
                <FeatureTag>No Experience Needed</FeatureTag>
              </CardFeatures>
              <CardButton href="/bowfishing" $variant="night">
                Explore Bowfishing Trips
              </CardButton>
            </CardContent>
          </Card>
        </CardsGrid>
      </Container>
    </ExperiencesSection>
  )
}
