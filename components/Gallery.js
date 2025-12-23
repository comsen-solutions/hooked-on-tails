"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const GallerySection = styled.section`
  background: #fff;
  padding: 5rem 5%;
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

const InstagramContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: 3rem;
`;

const InstagramButton = styled.a`
  display: inline-block;
  margin-top: 3rem;
  padding: 1.2rem 3rem;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 5px 20px rgba(188, 24, 136, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(188, 24, 136, 0.4);
  }
`;

export default function Gallery() {
  return (
    <GallerySection>
      <SectionTitle>See The Action</SectionTitle>
      <InstagramContainer>
        <Subtitle>
          Check out our latest catches and fishing adventures from the Louisiana
          marshes!
        </Subtitle>

        {/* Paste Behold embed code here */}
        <iframe
          src="https://behold.so/feed/YOUR-FEED-ID"
          style={{
            border: "none",
            width: "100%",
            height: "800px",
            borderRadius: "20px",
            boxShadow: "0 10px 60px rgba(0, 0, 0, 0.2)",
          }}
        />

        <InstagramButton
          href="https://instagram.com/hookedontails"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow @hookedontails on Instagram
        </InstagramButton>
      </InstagramContainer>
    </GallerySection>
  );
}
