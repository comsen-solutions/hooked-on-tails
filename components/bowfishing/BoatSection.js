"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const BoatSectionWrapper = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.gradients.dark};
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

const BoatContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BoatImage = styled.div`
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
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  font-size: 4rem;

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const BoatInfo = styled.div`
  h3 {
    font-size: 2rem;
    color: ${theme.colors.primary.main};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text.light};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`;

const BoatFeatures = styled.ul`
  list-style: none;
  margin-top: 1.5rem;

  li {
    padding: 0.5rem 0;
    font-size: 1.05rem;
    color: ${theme.colors.text.light};

    &::before {
      content: "✓ ";
      color: ${theme.colors.primary.main};
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

export default function BoatSection() {
  return (
    <BoatSectionWrapper>
      <SectionTitle>The Boat</SectionTitle>
      <BoatContent>
        <BoatImage>
          <img
            src="/images/bowfish_boat.png"
            alt="Fishing Experience"
            onError={(e) => {
              console.error("Image failed to load:", e);
              e.target.style.display = "none";
            }}
          />
        </BoatImage>
        <BoatInfo>
          <h3>Purpose-Built Bowfishing Vessel</h3>
          <p>
            Experience night bowfishing aboard Captain John's specially equipped
            bowfishing boat. Featuring powerful LED lighting systems that
            illuminate the water, a raised shooting platform, and plenty of deck
            space for your group.
          </p>
          <BoatFeatures>
            <li>High-powered LED lighting system</li>
            <li>Raised shooting platform for optimal angles</li>
            <li>All bowfishing equipment provided</li>
            <li>Spacious deck for your group</li>
            <li>Safety rails and equipment</li>
            <li>Fish storage and cleaning area</li>
          </BoatFeatures>
        </BoatInfo>
      </BoatContent>
    </BoatSectionWrapper>
  );
}
