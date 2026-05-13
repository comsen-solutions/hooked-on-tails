"use client";

import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const Section = styled.section`
  background: #fff;
  padding: 5rem 5%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
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

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text.secondary};
  max-width: 780px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: ${theme.colors.background.light};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.cardHover};
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: ${theme.colors.background.dark};
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(26, 26, 26, 0.86);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
`;

const CardBody = styled.div`
  padding: 1.35rem;
`;

const CardTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: 1.25rem;
  margin-bottom: 0.65rem;
`;

const CardText = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary.dark};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary.main};
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 1rem 1.5rem;
  min-width: 210px;
  border-radius: 999px;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
  background: ${(props) => props.$variant === "tiktok"
    ? "linear-gradient(135deg, #111 0%, #333 100%)"
    : "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
  }
`;

const highlights = [
  {
    image: "/images/bowfishing_experience.jpg",
    alt: "Night bowfishing charter action in the Louisiana marsh near New Orleans",
    badge: "Instagram",
    title: "Night Bowfishing Action",
    text: "See real bowfishing trip highlights from Louisiana marsh nights near New Orleans, Hopedale, Delacroix, and Shell Beach.",
    href: "https://www.instagram.com/hookedontails/",
    linkText: "See more on Instagram →",
  },
  {
    image: "/images/bowfish_boat.jpg",
    alt: "Hooked on Tails bowfishing boat with lights for nighttime Louisiana charters",
    badge: "TikTok",
    title: "Watch the Boat & Lights",
    text: "Follow short videos of the bowfishing setup, marsh runs, and on-the-water action without loading heavy embeds here.",
    href: "https://www.tiktok.com/@hookedontailsbowfishing",
    linkText: "Watch on TikTok →",
  },
  {
    image: "/images/saints_one.jpg",
    alt: "Family friendly Hooked on Tails fishing charter trip highlight",
    badge: "Social",
    title: "Recent Trip Highlights",
    text: "Browse fresh catches, customer trips, and seasonal updates from Hooked on Tails before you book your charter.",
    href: "https://www.instagram.com/hookedontails/",
    linkText: "Follow recent catches →",
  },
];

export default function SocialTripHighlights({ compact = false }) {
  return (
    <Section>
      <Container>
        <SectionTitle>{compact ? "Recent Bowfishing Highlights" : "See The Action"}</SectionTitle>
        <Subtitle>
          Follow Hooked on Tails for recent bowfishing and fishing trip highlights. This section uses fast local images and links out to Instagram and TikTok instead of loading heavy social feed widgets.
        </Subtitle>

        <Cards>
          {highlights.map((item) => (
            <Card key={item.title}>
              <ImageWrap>
                <Badge>{item.badge}</Badge>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </ImageWrap>
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.text}</CardText>
                <CardLink href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.linkText}
                </CardLink>
              </CardBody>
            </Card>
          ))}
        </Cards>

        <ButtonRow>
          <SocialButton href="https://www.instagram.com/hookedontails/" target="_blank" rel="noopener noreferrer">
            Follow on Instagram
          </SocialButton>
          <SocialButton href="https://www.tiktok.com/@hookedontailsbowfishing" target="_blank" rel="noopener noreferrer" $variant="tiktok">
            Follow on TikTok
          </SocialButton>
        </ButtonRow>
      </Container>
    </Section>
  );
}
