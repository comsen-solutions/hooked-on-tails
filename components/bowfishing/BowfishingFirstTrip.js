"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const Section = styled.section`
  padding: 4rem 5%;
  max-width: 1100px;
  margin: 0 auto;

  h2 {
    color: ${theme.colors.text.primary};
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  > p {
    max-width: 750px;
    color: ${theme.colors.text.secondary};
    font-size: 1.15rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const Steps = styled.ol`
  list-style: none;
  padding: 0;
  counter-reset: trip-step;

  li {
    counter-increment: trip-step;
    display: grid;
    grid-template-columns: 3rem minmax(0, 1fr);
    gap: 1rem;
    padding: 1.5rem 0;
    border-top: 1px solid #ddd;

    &::before {
      content: "0" counter(trip-step);
      color: ${theme.colors.primary.dark};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  h3 {
    color: ${theme.colors.text.primary};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.05rem;
    line-height: 1.7;
  }
`;

export default function BowfishingFirstTrip() {
  return (
    <Section aria-labelledby="first-bowfishing-trip">
      <h2 id="first-bowfishing-trip">Your First Bowfishing Trip</h2>
      <p>
        You don&apos;t need fishing or archery experience. We provide the bow,
        equipment, and instruction so you can get comfortable before taking
        your shot.
      </p>
      <Steps>
        <li>
          <div>
            <h3>Meet Your Captain</h3>
            <p>
              Arrive at your confirmed meeting point with your group, food and
              drinks, and fishing license if required. Captain John will walk
              you through the equipment and safety guidance for the night.
            </p>
          </div>
        </li>
        <li>
          <div>
            <h3>Learn to Spot and Shoot</h3>
            <p>
              The boat&apos;s lights illuminate the shallow marsh water.
              Captain John provides bowfishing instruction and helps identify
              legal target species. Take your time, ask questions, and learn
              as you go.
            </p>
          </div>
        </li>
        <li>
          <div>
            <h3>Bring Home Your Catch</h3>
            <p>
              Fish cleaning is included with the trip. Bring an ice chest for
              your catch, and check the expected return time with Captain John
              when planning the rest of your evening.
            </p>
          </div>
        </li>
      </Steps>
    </Section>
  );
}
