"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const ServiceAreaSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.colors.background.light};
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
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

const Intro = styled.p`
  max-width: 900px;
  margin: 0 auto 2rem;
  color: ${theme.colors.text.secondary};
  font-size: 1.15rem;
  line-height: 1.8;
  text-align: center;
`;

const AreaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const AreaCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);

  h3 {
    color: ${theme.colors.primary.dark};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

export default function BowfishingServiceArea() {
  return (
    <ServiceAreaSection id="bowfishing-near-new-orleans">
      <SectionTitle>Plan Your Night Near New Orleans</SectionTitle>
      <Intro>
        We fish the Louisiana marshes near New Orleans, including areas around
        Hopedale, Delacroix, and Shell Beach. Before you head out, confirm your
        meeting point and departure time directly with Captain John.
      </Intro>
      <AreaGrid>
        <AreaCard>
          <h3>Confirm Your Launch</h3>
          <p>
            Captain John will confirm your exact meeting location, launch
            instructions, and departure time. Confirm these details before
            setting off so you know where to meet and when to arrive.
          </p>
        </AreaCard>
        <AreaCard>
          <h3>Allow for a Full Evening</h3>
          <p>
            Plan for a 4–4.5-hour trip, plus travel to and from the launch.
            Check the drive from your hotel or home once your meeting point is
            confirmed, and ask Captain John about the expected return time.
          </p>
        </AreaCard>
        <AreaCard>
          <h3>Tell Us About Your Crew</h3>
          <p>
            Include your preferred date, number of guests, and any children in
            your inquiry. Trips welcome ages 8 and up. Share any questions about
            comfort or mobility so you can discuss the boat and trip before booking.
          </p>
        </AreaCard>
      </AreaGrid>
    </ServiceAreaSection>
  );
}
