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
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
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
      <SectionTitle>Bowfishing Near New Orleans</SectionTitle>
      <Intro>
        Hooked on Tails offers nighttime New Orleans bowfishing charters in
        Louisiana marsh waters near New Orleans, including areas around
        Hopedale, Delacroix, and Shell Beach. These trips are built for anglers
        who want a hands-on Louisiana bowfishing charter with lights, gear,
        instruction, and local guidance from Captain John Styron.
      </Intro>
      <AreaGrid>
        <AreaCard>
          <h3>Near New Orleans</h3>
          <p>
            A close-to-New-Orleans bowfishing trip for visitors and locals who
            want to experience Louisiana marsh action after dark.
          </p>
        </AreaCard>
        <AreaCard>
          <h3>Hopedale</h3>
          <p>
            Productive marsh access for nighttime bowfishing, with shallow-water
            habitat where redfish, drum, gar, and sheepshead can be found.
          </p>
        </AreaCard>
        <AreaCard>
          <h3>Delacroix</h3>
          <p>
            A classic Louisiana marsh area known for winding waterways, grassy
            edges, and the kind of habitat that makes bowfishing exciting.
          </p>
        </AreaCard>
        <AreaCard>
          <h3>Shell Beach</h3>
          <p>
            Another nearby coastal access area for Louisiana fishing and
            bowfishing trips near the New Orleans region.
          </p>
        </AreaCard>
      </AreaGrid>
    </ServiceAreaSection>
  );
}
