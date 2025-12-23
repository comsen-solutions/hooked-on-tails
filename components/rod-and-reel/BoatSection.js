"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const BoatSectionWrapper = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.gradients.light};
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);

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

const BoatFeatures = styled.ul`
  list-style: none;
  margin-top: 1.5rem;

  li {
    padding: 0.5rem 0;
    font-size: 1.05rem;
    color: ${theme.colors.text.secondary};

    &::before {
      content: "✓ ";
      color: ${theme.colors.primary.dark};
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
            src="/images/rod_reel_boat.png"
            alt="Fishing Experience"
            onError={(e) => {
              console.error("Image failed to load:", e);
              e.target.style.display = "none";
            }}
          />
        </BoatImage>
        <BoatInfo>
          <h3>Your Fishing Vessel</h3>
          <p>
            Fish in comfort aboard Captain John's well-equipped fishing boat,
            designed for the Louisiana coastal waters. Whether navigating the
            shallow marshes for inshore fishing or heading offshore for red
            snapper, you'll have everything you need for a successful day on the
            water.
          </p>
          <BoatFeatures>
            <li>Spacious deck with plenty of room to fish</li>
            <li>Quality rods and reels provided</li>
            <li>Live bait wells and tackle storage</li>
            <li>Shaded areas for sun protection</li>
            <li>Safety equipment on board</li>
            <li>Fish cleaning station available</li>
          </BoatFeatures>
        </BoatInfo>
      </BoatContent>
    </BoatSectionWrapper>
  );
}
