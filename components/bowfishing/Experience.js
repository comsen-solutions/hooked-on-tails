"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const ExperienceSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${theme.colors.text.primary};
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

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.gradients.dark};
  color: ${theme.colors.primary.main};
  font-size: 4rem;

  p {
    font-size: 1.2rem;
    color: ${theme.colors.text.light};
    margin-top: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const ExperienceInfo = styled.div`
  h3 {
    font-size: 2rem;
    color: ${theme.colors.text.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`;

const ExperienceHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const HighlightItem = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    color: ${theme.colors.primary.dark};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
  }
`;

export default function Experience() {
  return (
    <ExperienceSection id="experience">
      <SectionTitle>The Adventure Awaits</SectionTitle>
      <ExperienceContent>
        <ExperienceImage>
          <img
            src="/images/bowfishing_experience.png"
            alt="Fishing Experience"
            onError={(e) => {
              console.error("Image failed to load:", e);
              e.target.style.display = "none";
            }}
          />
        </ExperienceImage>
        <ExperienceInfo>
          <h3>Discover Louisiana's Night Waters</h3>
          <p>
            Come see the Louisiana marshes at night in a way few ever
            experience. Watch as the marsh comes alive under our lights,
            revealing natural oyster beds, underwater contours, and incredible
            wildlife.
          </p>
          <p>
            You'll encounter redfish, speckled trout, flounder, black drum,
            sheepshead, and many more species in their natural habitat. This
            isn't just fishing—it's an unforgettable nighttime adventure through
            one of America's most unique ecosystems.
          </p>
          <ExperienceHighlights>
            <HighlightItem>
              <h4>Night Experience</h4>
              <p>See the marsh in a completely different light</p>
            </HighlightItem>
            <HighlightItem>
              <h4>Multiple Species</h4>
              <p>Redfish, trout, flounder, drum, sheepshead & more</p>
            </HighlightItem>
            <HighlightItem>
              <h4>Family Friendly</h4>
              <p>Great for ages 8 and up</p>
            </HighlightItem>
            <HighlightItem>
              <h4>Learn Bowfishing</h4>
              <p>Full instruction provided</p>
            </HighlightItem>
          </ExperienceHighlights>
        </ExperienceInfo>
      </ExperienceContent>
    </ExperienceSection>
  );
}
