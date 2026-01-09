"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const FooterWrapper = styled.footer`
  background: ${theme.colors.background.dark};
  color: ${theme.colors.text.light};
  padding: 3rem 5%;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.primary.main};
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p,
  a {
    color: ${theme.colors.text.light};
    text-decoration: none;
    line-height: 1.8;
    display: block;
  }

  a:hover {
    color: ${theme.colors.primary.main};
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  text-decoration: none;
  width: 32px;
  height: 32px;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.8;
  }

  img {
    display: block;
  }
`;

const FacebookIcon = styled.div`
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    margin: 0.5rem 0;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper id="contact">
      <FooterContent>
        <FooterSection>
          <h3>Hooked on Tails</h3>
          <p>
            Experience the best of Louisiana fishing with Captain John Styron -
            both day and night adventures available.
          </p>
          {/* <p style={{ marginTop: "1rem" }}>
            <strong>Licensed & Insured</strong>
          </p> */}
        </FooterSection>

        <FooterSection>
          <h3>Contact Information</h3>
          <ContactLink href="tel:+15046280232">
            <span>504-628-0232</span>
          </ContactLink>
          <ContactLink href="mailto:johnstyron62@gmail.com">
            <span>johnstyron62@gmail.com</span>
          </ContactLink>
        </FooterSection>

        <FooterSection>
          <h3>Our Experiences</h3>
          <Link href="/rod-and-reel">Rod & Reel Fishing</Link>
          <Link href="/bowfishing">Night Bowfishing</Link>
          <Link href="/rod-and-reel">Red Snapper Fishing</Link>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
          <p>Stay updated with our latest catches and trip photos!</p>
          <SocialLinks>
            <SocialLink
              href="https://www.facebook.com/hookedontails"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FacebookIcon>
                <Image
                  src="/images/facebook-icon.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </FacebookIcon>
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/hookedontails/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <Image
                src="/images/instagram-icon.png"
                alt="Instagram"
                width={32}
                height={32}
              />
            </SocialLink>
            <SocialLink
              href="https://www.tiktok.com/@hookedontailsbowfishing"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok"
            >
              <Image
                src="/images/tiktok-icon.png"
                alt="TikTok"
                width={32}
                height={32}
              />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2025 Hooked on Tails. All rights reserved.</p>
        <p>Captain John Styron | New Orleans, Louisiana</p>
        {/* <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
          Louisiana Charter Fishing License #12345
        </p> */}
      </FooterBottom>
    </FooterWrapper>
  );
}
