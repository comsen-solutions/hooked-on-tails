"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const Section = styled.section`
  padding: 6rem 5% 7rem;
  background: #f4f3ee;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 5rem;
  align-items: end;
  margin-bottom: 3.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Eyebrow = styled.p`
  color: #8a6800;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.82rem;
  margin-bottom: 0.8rem;
`;

const Title = styled.h2`
  color: ${theme.colors.text.primary};
  font-size: clamp(2.3rem, 5vw, 4.4rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
  text-wrap: balance;
`;

const IntroCopy = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1.15rem;
  line-height: 1.8;
  max-width: 62ch;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr 0.9fr;
  border-top: 1px solid rgba(26, 26, 26, 0.16);
  border-bottom: 1px solid rgba(26, 26, 26, 0.16);

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Detail = styled.article`
  padding: 2.25rem;
  border-right: 1px solid rgba(26, 26, 26, 0.16);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2rem 0;
    border-right: 0;
    border-bottom: 1px solid rgba(26, 26, 26, 0.16);

    &:last-child {
      border-bottom: 0;
    }
  }
`;

const Number = styled.span`
  display: block;
  margin-bottom: 2.5rem;
  color: #9a7600;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  font-variant-numeric: tabular-nums;
`;

const DetailTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: 1.45rem;
  margin-bottom: 0.65rem;
`;

const DetailCopy = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.7;
`;

export default function TripDetails() {
  return (
    <Section aria-labelledby="trip-details-title">
      <Container>
        <Intro>
          <div>
            <Eyebrow>Plan your day</Eyebrow>
            <Title id="trip-details-title">A straightforward day on the water</Title>
          </div>
          <IntroCopy>
            Captain John guides inshore trips through the Louisiana coastal
            marshes around Hopedale and Lake Borgne. Offshore red snapper trips
            head into deeper water when season, weather, and conditions allow.
            Exact departure details are confirmed before your trip.
          </IntroCopy>
        </Intro>

        <DetailGrid>
          <Detail>
            <Number>01 / TIME</Number>
            <DetailTitle>About five hours</DetailTitle>
            <DetailCopy>
              Daytime departure with the final schedule based on the trip,
              season, and current fishing conditions.
            </DetailCopy>
          </Detail>
          <Detail>
            <Number>02 / GEAR</Number>
            <DetailTitle>Equipment provided</DetailTitle>
            <DetailCopy>
              Rods, reels, bait, tackle, safety equipment, and fish cleaning
              are included.
            </DetailCopy>
          </Detail>
          <Detail>
            <Number>03 / GROUP</Number>
            <DetailTitle>Built for your crew</DetailTitle>
            <DetailCopy>
              Inshore trips serve three to five anglers. Offshore trips serve
              four to six. Smaller parties can ask about availability.
            </DetailCopy>
          </Detail>
        </DetailGrid>
      </Container>
    </Section>
  );
}
