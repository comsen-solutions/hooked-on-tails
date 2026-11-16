"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";
import { bowfishingFaqs } from "@/lib/bowfishingFaqData";

const FaqSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
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
  max-width: 800px;
  margin: 0 auto 2rem;
  color: ${theme.colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FaqItem = styled.details`
  background: #fff;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &[open] summary span {
    transform: rotate(45deg);
  }
`;

const FaqQuestion = styled.summary`
  width: 100%;
  padding: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  color: ${theme.colors.text.primary};
  background: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 1rem;
  gap: 1rem;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary.dark};
    outline-offset: -3px;
  }

  &:hover {
    color: ${theme.colors.primary.dark};
  }

  span {
    font-size: 1.5rem;
    transition: transform 0.3s;
    flex-shrink: 0;
  }
`;

const FaqAnswer = styled.div`
  padding: 0 1.5rem 1.5rem;
  color: ${theme.colors.text.secondary};
  line-height: 1.7;
`;

export default function BowfishingFAQ() {
  return (
    <FaqSection id="bowfishing-faq">
      <SectionTitle>New Orleans Bowfishing FAQs</SectionTitle>
      <Intro>
        Planning a nighttime bowfishing trip near New Orleans? Here are the
        details on prices, launch planning, first-time trips, and what to bring.
      </Intro>
      <FaqContainer>
        {bowfishingFaqs.map((faq, index) => (
          <FaqItem key={faq.question} open={index === 0}>
            <FaqQuestion>
              {faq.question}
              <span aria-hidden="true">+</span>
            </FaqQuestion>
            <FaqAnswer>{faq.answer}</FaqAnswer>
          </FaqItem>
        ))}
      </FaqContainer>
    </FaqSection>
  );
}
