"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import { trackBookingClick } from "@/lib/analytics";

const FloatingButton = styled(Link)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 1rem 2rem;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 999;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 5px 30px rgba(255, 215, 0, 0.5);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.6);
  }

  &:active {
    transform: translateY(1px) scale(0.99);
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: 20px;
    right: 20px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

export default function FloatingBookButton({
  tripType = "",
  source = "floating-book-button",
  label = "Book Now",
}) {
  const query = new URLSearchParams();

  if (tripType) query.set("trip", tripType);
  if (source) query.set("source", source);

  const queryString = query.toString();
  const href = queryString ? `/contact?${queryString}` : "/contact";

  return (
    <FloatingButton
      href={href}
      onClick={() => trackBookingClick({ tripType, source })}
    >
      {label}
    </FloatingButton>
  );
}
