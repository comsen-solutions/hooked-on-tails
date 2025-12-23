"use client";

import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

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

const faqs = [
  {
    question: "What's the best time of year to fish?",
    answer:
      "Louisiana offers great fishing year-round! Spring and fall are particularly excellent for redfish and speckled trout. Captain John will advise on the best times based on current conditions.",
  },
  {
    question: "Do I need rod-and-reel fishing experience?",
    answer:
      "Not at all! Captain John welcomes anglers of all skill levels. He'll teach beginners the basics and help experienced anglers target trophy fish.",
  },
  {
    question: "Do I need fishing or bowfishing experience?",
    answer:
      "Not at all! Captain John welcomes everyone from complete beginners to experienced anglers. He'll teach you everything you need to know and help you have a successful trip.",
  },
  {
    question: "What should I wear and bring?",
    answer:
      "Dress for the weather in comfortable, non-marking shoes. Bring sunscreen, sunglasses, a hat, rain gear if needed, your Louisiana fishing license, food and drinks, and an ice chest for your catch. All fishing equipment, bait, and tackle are provided.",
  },
  {
    question: "Can I keep the fish I catch?",
    answer:
      "Yes! All legal catches are yours to keep. Captain John can clean and fillet your fish at the end of the trip so they're ready for the table.",
  },
  {
    question: "Where do we meet?",
    answer:
      "The boat launches from Patriot Lodge in New Orleans. Exact directions and meeting time will be provided upon booking.",
  },
  {
    question: "What if the weather is bad?",
    answer:
      "Safety is the top priority. If conditions are unsafe, Captain John will work with you to reschedule. Light rain usually doesn't stop the fish from biting!",
  },
  {
    question: "Do I need a fishing license?",
    answer:
      "Yes, you'll need a valid Louisiana fishing license. You can obtain a 3-day charter pass for $20 from the Louisiana Department of Wildlife and Fisheries.",
  },
  {
    question: "Is there an age requirement for bowfishing?",
    answer:
      "The youngest age for bowfishing with Captain John is 8 years old. Both fishing and bowfishing are great family outings!",
  },
  {
    question: "How do I pay the deposit?",
    answer:
      "After submitting your booking request, Captain John will contact you with payment details. A deposit is required to hold your date, with the balance due on the day of the trip.",
  },
];

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
