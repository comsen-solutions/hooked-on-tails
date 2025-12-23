'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '@/lib/theme'

const GallerySection = styled.section`
  background: #fff;
  padding: 5rem 5%;
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

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.2);
`

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.$currentSlide * 100}%);
`

const CarouselSlide = styled.div`
  min-width: 100%;
  height: 600px;
  position: relative;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 400px;
  }
`

const CarouselPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.gradients.dark};
  color: ${theme.colors.primary.main};
  font-size: 3rem;
  text-align: center;
  padding: 2rem;

  p {
    font-size: 1.2rem;
    color: ${theme.colors.text.light};
    margin-top: 1rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1rem;
    }
  }
`

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 215, 0, 0.9);
  backdrop-filter: blur(10px);
  color: ${theme.colors.text.primary};
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(212, 166, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`

const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
`

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$active ? theme.colors.primary.main : 'rgba(255, 255, 255, 0.5)'};
  border: 2px solid #fff;
  cursor: pointer;
  transition: all 0.3s;
  transform: scale(${props => props.$active ? 1.3 : 1});
  box-shadow: ${props => props.$active ? '0 0 10px rgba(255, 215, 0, 0.8)' : 'none'};
  padding: 0;
`

const CarouselCaption = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  max-width: 80%;
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`

const slides = [
  {
    icon: '🎣',
    title: 'Night Bowfishing Action',
    caption: 'Experience the thrill of night bowfishing',
  },
  {
    icon: '🐟',
    title: 'Trophy Catches',
    caption: 'Alligator gar, redfish, and more',
  },
  {
    icon: '🌙',
    title: "Louisiana Marshes at Night",
    caption: 'See the marsh come alive under our lights',
  },
  {
    icon: '🚤',
    title: 'Professional Setup',
    caption: 'Well-equipped boats and expert guidance',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Adventures',
    caption: 'Great for families and groups',
  },
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <GallerySection>
      <SectionTitle>Gallery</SectionTitle>
      <CarouselContainer>
        <CarouselWrapper $currentSlide={currentSlide}>
          {slides.map((slide, index) => (
            <CarouselSlide key={index}>
              <CarouselPlaceholder>
                <div>{slide.icon}</div>
                <p>{slide.title}</p>
              </CarouselPlaceholder>
              <CarouselCaption>{slide.caption}</CarouselCaption>
            </CarouselSlide>
          ))}
        </CarouselWrapper>
        <CarouselButton className="prev" onClick={prevSlide}>
          ‹
        </CarouselButton>
        <CarouselButton className="next" onClick={nextSlide}>
          ›
        </CarouselButton>
        <CarouselDots>
          {slides.map((_, index) => (
            <CarouselDot
              key={index}
              $active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </CarouselDots>
      </CarouselContainer>
    </GallerySection>
  )
}
