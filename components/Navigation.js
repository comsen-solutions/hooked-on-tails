"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import HOTLogo from "../public/images/hooked-on-tails.png";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary.main};
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;
    font-size: 0.9rem;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.white};
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;

  &:hover {
    color: ${theme.colors.primary.main};
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <Container>
        <Logo href="/">
          <Image
            src={HOTLogo}
            alt="Hooked on Tails Logo"
            height={50}
            priority
          />
        </Logo>
        <NavList>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/captain">Captain</NavLink>
          </li>
          <li>
            <NavLink href="/rod-and-reel">Rod & Reel</NavLink>
          </li>
          <li>
            <NavLink href="/bowfishing">Bowfishing</NavLink>
          </li>
          <li>
            <NavLink href="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </NavList>
      </Container>
    </Nav>
  );
}
