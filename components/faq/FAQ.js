"use client";

import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import { faqs } from "@/lib/faqData";

const FaqSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.colors.background.light};
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
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

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FaqItem = styled.div`
  background: #fff;
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`;

const FaqQuestion = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  color: ${theme.colors.text.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${theme.colors.primary.dark};
  }

  span {
    font-size: 1.5rem;
    transition: transform 0.3s;
    transform: rotate(${(props) => (props.$isOpen ? "45deg" : "0deg")});
  }
`;

const FaqAnswer = styled.div`
  padding: ${(props) => (props.$isOpen ? "0 1.5rem 1.5rem" : "0 1.5rem")};
  color: ${theme.colors.text.secondary};
  max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqSection id="faq">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqContainer>
        {faqs.map((faq, index) => (
          <FaqItem key={index}>
            <FaqQuestion
              onClick={() => toggleFaq(index)}
              $isOpen={openIndex === index}
            >
              {faq.question}
              <span>+</span>
            </FaqQuestion>
            <FaqAnswer $isOpen={openIndex === index}>{faq.answer}</FaqAnswer>
          </FaqItem>
        ))}
      </FaqContainer>
    </FaqSection>
  );
}
