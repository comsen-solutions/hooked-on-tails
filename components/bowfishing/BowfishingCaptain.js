"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const Section = styled.section`
  padding: 4rem 5%;
  background: ${theme.colors.background.light};
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 3rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const Portrait = styled.div`
  position: relative;
  width: 240px;
  aspect-ratio: 1;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  background: ${theme.colors.background.dark};
  border-bottom: 4px solid ${theme.colors.primary.main};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 200px;
  }
`;

const Bio = styled.div`
  h2 {
    color: ${theme.colors.text.primary};
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .credentials {
    color: ${theme.colors.text.primary};
    font-weight: 700;
  }

  a {
    display: inline-block;
    color: ${theme.colors.text.primary};
    font-weight: 700;
    text-decoration-color: ${theme.colors.primary.dark};
    text-decoration-thickness: 2px;
    text-underline-offset: 5px;
    padding: 0.5rem 0;
  }
`;

export default function BowfishingCaptain() {
  return (
    <Section aria-labelledby="meet-your-captain">
      <Content>
        <Portrait>
          <Image
            src="/images/captain_john.webp"
            alt="Captain John Styron of Hooked on Tails"
            fill
            sizes="(max-width: 768px) 200px, 240px"
            style={{ objectFit: "cover" }}
          />
        </Portrait>
        <Bio>
          <h2 id="meet-your-captain">Fish With Captain John Styron</h2>
          <p className="credentials">New Orleans firefighter. Lifelong Louisiana waterman.</p>
          <p>
            John grew up in Venetian Isles on the outskirts of Lake Borgne,
            driving boats and fishing from age 10. He has been bowfishing since
            age 15, building his knowledge of these waters through years of
            fishing, crabbing, shrimping, and oystering.
          </p>
          <p>
            Whether you&apos;re joining him for your first shot or a day with a
            rod and reel, you&apos;ll fish with a guide who grew up on this coast.
          </p>
          <Link href="/captain">Meet Captain John →</Link>
        </Bio>
      </Content>
    </Section>
  );
}
