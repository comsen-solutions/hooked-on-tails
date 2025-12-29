"use client";

import { useState } from "react";
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
  z-index: 1001;

  &:hover {
    transform: scale(1.05);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: ${theme.colors.primary.main};
    transition: all 0.3s ease;
    border-radius: 2px;

    ${({ $isOpen }) =>
      $isOpen &&
      `
      &:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    `}
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.98);
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Nav>
        <Container>
          <Logo href="/" onClick={closeMenu}>
            <Image
              src={HOTLogo}
              alt="Hooked on Tails Logo"
              height={50}
              priority
            />
          </Logo>

          <HamburgerButton
            onClick={toggleMenu}
            $isOpen={isOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </HamburgerButton>

          <NavList $isOpen={isOpen}>
            <li>
              <NavLink href="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/captain" onClick={closeMenu}>
                Captain
              </NavLink>
            </li>
            <li>
              <NavLink href="/rod-and-reel" onClick={closeMenu}>
                Rod & Reel
              </NavLink>
            </li>
            <li>
              <NavLink href="/bowfishing" onClick={closeMenu}>
                Bowfishing
              </NavLink>
            </li>
            <li>
              <NavLink href="/faq" onClick={closeMenu}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact" onClick={closeMenu}>
                Book Now
              </NavLink>
            </li>
          </NavList>
        </Container>
      </Nav>
      <Overlay $isOpen={isOpen} onClick={closeMenu} />
    </>
  );
}
