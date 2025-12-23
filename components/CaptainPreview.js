'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { theme } from '@/lib/theme'

const CaptainSection = styled.section`
  padding: 5rem 5%;
  background: ${theme.colors.text.white};
`

const CaptainContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: ${theme.borderRadius.circle};
  background: ${theme.gradients.primary};
  padding: 5px;
  box-shadow: ${theme.shadows.gold};
  overflow: hidden;
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`

const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${theme.borderRadius.circle};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background.dark};
  overflow: hidden;
  position: relative;
`

const CaptainPlaceholder = styled.div`
  color: ${theme.colors.primary.main};
  font-size: 4rem;
  z-index: 1;
`

const CaptainText = styled.div`
  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.text.primary};
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: ${theme.colors.primary.dark};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`

export default function CaptainPreview() {
  return (
    <CaptainSection id="captain">
      <CaptainContent>
        <ImageWrapper>
          <ImageInner>
            {/* Uncomment when you have the captain image */}
            {/* <Image
              src="/images/captain_john.png"
              alt="Captain John Styron"
              fill
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            /> */}
            <CaptainPlaceholder>⚓</CaptainPlaceholder>
          </ImageInner>
        </ImageWrapper>

        <CaptainText>
          <h2>Meet Captain John</h2>
          <p className="subtitle">New Orleans Firefighter & Lifelong Waterman</p>
          <p>
            Captain John is native to the waters of New Orleans, having grown up on the water in Venetian Isles on the outskirts of Lake Borgne. From the age of 10, he's been driving boats and fishing these waters.
          </p>
          <p>
            With decades of experience fishing, crabbing, shrimping, and oystering in Louisiana's marshes, Captain John brings unmatched local knowledge to every trip. Come appreciate the outdoors with a true local expert.
          </p>
        </CaptainText>
      </CaptainContent>
    </CaptainSection>
  )
}
