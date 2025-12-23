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
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  background: #f0f0f0;
  min-height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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
      <SectionTitle>The Fishing Experience</SectionTitle>
      <ExperienceContent>
        <ExperienceImage>
          <img
            src="/images/fishing_experience.png"
            alt="Fishing Experience"
            onError={(e) => {
              console.error("Image failed to load:", e);
              e.target.style.display = "none";
            }}
          />
        </ExperienceImage>
        <ExperienceInfo>
          <h3>Louisiana's Premier Fishing Waters</h3>
          <p>
            Fish the same waters that Captain John has known since childhood.
            The Louisiana marshes offer some of the best inshore fishing in the
            Gulf Coast, with abundant redfish, speckled trout, and more.
          </p>
          <p>
            Whether you're a seasoned angler or picking up a rod for the first
            time, Captain John will put you on the fish and help you create
            memories that last a lifetime.
          </p>
          <ExperienceHighlights>
            <HighlightItem>
              <h4>Daytime Adventures</h4>
              <p>Fish during the beautiful Louisiana daylight hours</p>
            </HighlightItem>
            <HighlightItem>
              <h4>Expert Guidance</h4>
              <p>Local knowledge from a lifelong waterman</p>
            </HighlightItem>
            <HighlightItem>
              <h4>Family Friendly</h4>
              <p>Great for anglers of all ages and skill levels</p>
            </HighlightItem>
            <HighlightItem>
              <h4>Trophy Potential</h4>
              <p>Target trophy-class redfish and trout</p>
            </HighlightItem>
          </ExperienceHighlights>
        </ExperienceInfo>
      </ExperienceContent>
    </ExperienceSection>
  );
}
