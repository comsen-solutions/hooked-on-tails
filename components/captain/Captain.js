"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";
import CaptainJohn from "@/public/images/captain_john.png";
import Image from "next/image";

const CaptainSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: #fff;
  min-height: 70vh;
  margin-top: 2rem;
`;

const SectionTitle = styled.h1`
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

const CaptainContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: ${theme.borderRadius.circle};
  background: ${theme.gradients.primary};
  padding: 5px;
  box-shadow: ${theme.shadows.gold};
  overflow: hidden;
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`;

const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${theme.borderRadius.circle};
  overflow: hidden;
  position: relative;
  background: ${theme.colors.background.dark};
`;

const CaptainBio = styled.div`
  h3 {
    font-size: 2rem;
    color: ${theme.colors.text.primary};
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: ${theme.colors.primary.dark};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`;

export default function Captain() {
  return (
    <CaptainSection id="captain">
      <SectionTitle>Meet Captain John</SectionTitle>
      <CaptainContent>
        <ImageWrapper>
          <ImageInner>
            <Image
              src={CaptainJohn}
              alt="Captain John Styron"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </ImageInner>
        </ImageWrapper>

        <CaptainBio>
          <h3>Captain John Styron</h3>
          <p className="subtitle">
            New Orleans Firefighter & Lifelong Waterman
          </p>
          <p>
            Captain John is native to the waters of New Orleans, having grown up
            on the water in Venetian Isles on the outskirts of Lake Borgne. From
            the age of 10, he's been driving boats and fishing these waters.
          </p>
          <p>
            With bowfishing experience since age 15, Captain John has obtained
            extensive knowledge of how, when, and where to find fish. His
            childhood was spent fishing, crabbing, shrimping, oystering, and
            being on the water—and now he shares that passion with you.
          </p>
          <p>
            Come appreciate the outdoors and have an authentic Louisiana
            experience with a true local expert.
          </p>
        </CaptainBio>
      </CaptainContent>
    </CaptainSection>
  );
}
