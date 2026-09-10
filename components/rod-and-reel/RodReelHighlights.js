"use client";

import Image from "next/image";
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

const Header = styled.div`
  max-width: 760px;
  margin-bottom: 3rem;
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
  font-size: clamp(2.4rem, 5vw, 4.25rem);
  line-height: 1;
  letter-spacing: -0.045em;
  text-wrap: balance;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  grid-template-rows: repeat(2, minmax(230px, 1fr));
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const Feature = styled.figure`
  position: relative;
  min-height: 31rem;
  overflow: hidden;
  margin: 0;
  grid-row: 1 / 3;
  border-radius: 0 2rem 0 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-row: auto;
    min-height: 24rem;
  }
`;

const SmallFeature = styled.figure`
  position: relative;
  min-height: 15rem;
  overflow: hidden;
  margin: 0;

  &:last-child {
    border-radius: 0 0 0 2rem;
  }
`;

const Caption = styled.figcaption`
  position: absolute;
  inset: auto 0 0;
  z-index: 1;
  padding: 3rem 1.5rem 1.4rem;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(transparent, rgba(8, 15, 17, 0.88));
`;

export default function RodReelHighlights() {
  return (
    <Section aria-labelledby="fishing-highlights-title">
      <Container>
        <Header>
          <Eyebrow>Real Louisiana fishing</Eyebrow>
          <Title id="fishing-highlights-title">
            Marsh mornings, bent rods, and a cooler headed home
          </Title>
        </Header>
        <Grid>
          <Feature>
            <Image
              src="/images/fishing_experience.jpg"
              alt="A large Hooked on Tails fishing group gathered behind the day's catch"
              fill
              sizes="(max-width: 1024px) 100vw, 68vw"
              style={{ objectFit: "cover" }}
            />
            <Caption>Group trips with plenty of room for a shared story</Caption>
          </Feature>
          <SmallFeature>
            <Image
              src="/images/rod_n_reel_hero.jpg"
              alt="Anglers casting rods from the bow in a Louisiana marsh"
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              style={{ objectFit: "cover" }}
            />
            <Caption>Inshore fishing for beginners and regular anglers</Caption>
          </SmallFeature>
          <SmallFeature>
            <Image
              src="/images/rod_reel_boat.jpg"
              alt="Captain John's rod-and-reel charter boat"
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              style={{ objectFit: "cover" }}
            />
            <Caption>A comfortable boat rigged for Louisiana water</Caption>
          </SmallFeature>
        </Grid>
      </Container>
    </Section>
  );
}
