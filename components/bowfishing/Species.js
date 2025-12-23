'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'

const SpeciesSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: #fff;
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

const SpeciesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SpeciesCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
  }

  h3 {
    color: ${theme.colors.text.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 0.95rem;
  }
`

const SpeciesImage = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`

const species = [
  {
    name: 'Redfish',
    description: "Louisiana's most popular gamefish. Known for their copper color and fighting spirit.",
    image: 'redfish_render.png',
  },
  {
    name: 'Speckled Trout',
    description: 'Prized for both sport and table fare. Abundant in the coastal marshes.',
    image: 'trout_render.png',
  },
  {
    name: 'Flounder',
    description: 'Delicious flatfish found along the sandy bottoms of the marsh.',
    image: 'flounder_render.png',
  },
  {
    name: 'Black Drum',
    description: 'Hard-fighting bottom dwellers that can reach impressive sizes.',
    image: 'black_drum_render.png',
  },
  {
    name: 'Sheepshead',
    description: 'Found around structures. Excellent eating and fun to catch.',
    image: 'sheepshead_render.png',
  },
  {
    name: 'And More!',
    description: "The marsh is full of surprises. You never know what you'll find.",
    image: 'alligator_render.png',
  },
]

export default function Species() {
  return (
    <SpeciesSection>
      <SectionTitle>Target Catch</SectionTitle>
      <SpeciesGrid>
        {species.map((fish, index) => (
          <SpeciesCard key={index}>
            <SpeciesImage>
              <img src={`/images/${fish.image}`} alt={fish.name} />
            </SpeciesImage>
            <h3>{fish.name}</h3>
            <p>{fish.description}</p>
          </SpeciesCard>
        ))}
      </SpeciesGrid>
    </SpeciesSection>
  )
}
