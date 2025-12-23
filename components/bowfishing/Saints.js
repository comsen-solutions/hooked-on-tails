"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const SaintsSection = styled.section`
  background: ${theme.gradients.dark};
  padding: 5rem 5%;
`;

const SaintsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SaintsContent = styled.div`
  color: #fff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.primary.main};

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: ${theme.colors.text.light};
    margin-bottom: 1rem;
  }
`;

const SaintsImage = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default function Saints() {
  return (
    <SaintsSection>
      <SaintsContainer>
        <SaintsContent>
          <h2>Proud Host for the New Orleans Saints</h2>
          <p>
            Captain John has had the honor of hosting members of the New Orleans
            Saints for unforgettable bowfishing adventures in the Louisiana
            marshes.
          </p>
          <p>
            Experience the same world-class service and excitement that
            professional athletes trust for their fishing trips.
          </p>
        </SaintsContent>

        <SaintsImage>
          <img
            src="/images/saints_one.png"
            alt="New Orleans Saints Bowfishing Trip"
          />
        </SaintsImage>
      </SaintsContainer>
    </SaintsSection>
  );
}
