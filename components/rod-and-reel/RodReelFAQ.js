"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";
import { rodReelFaqs } from "@/lib/rodReelFaqData";

const Section = styled.section`
  padding: 6rem 5% 7rem;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.65fr 1.35fr;
  gap: 5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StickyIntro = styled.div`
  align-self: start;
  position: sticky;
  top: 7rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
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
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 1.25rem;
`;

const Intro = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.7;
  max-width: 36ch;
`;

const Questions = styled.dl`
  margin: 0;
`;

const Question = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 1.25rem;
  padding: 0 0 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(26, 26, 26, 0.14);

  &:last-child {
    margin-bottom: 0;
  }
`;

const Index = styled.span`
  color: #9a7600;
  font-size: 0.8rem;
  font-weight: 800;
  padding-top: 0.35rem;
  font-variant-numeric: tabular-nums;
`;

const QuestionTitle = styled.dt`
  color: ${theme.colors.text.primary};
  font-size: 1.25rem;
  font-weight: 750;
  line-height: 1.35;
  margin-bottom: 0.65rem;
`;

const Answer = styled.dd`
  color: ${theme.colors.text.secondary};
  line-height: 1.75;
  margin: 0;
  max-width: 68ch;
`;

export default function RodReelFAQ() {
  return (
    <Section id="fishing-faq" aria-labelledby="fishing-faq-title">
      <Container>
        <StickyIntro>
          <Eyebrow>Before you book</Eyebrow>
          <Title id="fishing-faq-title">Fishing charter questions</Title>
          <Intro>
            The practical details for planning an inshore or offshore trip with
            Captain John.
          </Intro>
        </StickyIntro>

        <Questions>
          {rodReelFaqs.map((faq, index) => (
            <Question key={faq.question}>
              <Index>{String(index + 1).padStart(2, "0")}</Index>
              <div>
                <QuestionTitle>{faq.question}</QuestionTitle>
                <Answer>{faq.answer}</Answer>
              </div>
            </Question>
          ))}
        </Questions>
      </Container>
    </Section>
  );
}
