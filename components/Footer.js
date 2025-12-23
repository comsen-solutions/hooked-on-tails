"use client";

import Link from "next/link";
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

  svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    transform: translateY(-3px);
    opacity: 0.8;
  }
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
          <p style={{ marginTop: "1rem" }}>
            <strong>Licensed & Insured</strong>
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Contact Information</h3>
          <ContactLink href="tel:+15045551234">
            <span>(504) 555-1234</span>
          </ContactLink>
          <ContactLink href="mailto:captain@hookedontails.com">
            <span>captain@hookedontails.com</span>
          </ContactLink>
          <ContactLink href="https://maps.google.com" target="_blank">
            <span>Patriot Lodge, New Orleans, LA</span>
          </ContactLink>
        </FooterSection>

        <FooterSection>
          <h3>Our Experiences</h3>
          <Link href="/rod-and-reel">Rod & Reel Fishing</Link>
          <Link href="/bowfishing">Night Bowfishing</Link>
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
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#1877F2"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
                <path
                  fill="#fff"
                  d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.643H7.078v3.47h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z"
                />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/hookedontails/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="instagram-gradient" cx="30%" cy="107%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#instagram-gradient)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
                <path
                  fill="#fff"
                  d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm6.5-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2025 Hooked on Tails. All rights reserved.</p>
        <p>Captain John Styron | New Orleans, Louisiana</p>
        <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
          Louisiana Charter Fishing License #12345
        </p>
      </FooterBottom>
    </FooterWrapper>
  );
}
