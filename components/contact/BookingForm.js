"use client";

import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const BookingSection = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.gradients.dark};
  color: #fff;
  text-align: center;
  min-height: 60vh;
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
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
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  text-align: left;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: ${theme.colors.text.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s;
    background: #fff;
    color: ${theme.colors.text.primary};
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary.main};
      box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
    }
  }

  textarea {
    resize: vertical;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: ${theme.shadows.gold};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.goldHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FormNote = styled.p`
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-top: 1rem;
`;

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    tripType: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking request:", formData);
    alert(
      "Thank you for your booking request! Captain John will contact you within 24 hours to confirm your trip."
    );
  };

  return (
    <BookingSection id="booking">
      <SectionTitle>Book Your Adventure</SectionTitle>
      <Subtitle>
        Ready to experience Louisiana fishing? Fill out the form below and
        Captain John will get back to you within 24 hours.
      </Subtitle>

      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <label htmlFor="date">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="tripType">Trip Type *</label>
              <select
                id="tripType"
                name="tripType"
                required
                value={formData.tripType}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="inshore">
                  Inshore - Redfish & Trout ($300/person)
                </option>
                <option value="offshore">
                  Offshore - Red Snapper ($1,600/4 people)
                </option>
                <option value="bowfishing">
                  Night Bowfishing ($250/person)
                </option>
              </select>
            </FormGroup>
          </FormRow>

          <FormGroup>
            <label htmlFor="guests">Number of People *</label>
            <select
              id="guests"
              name="guests"
              required
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7+">7+ People (Multiple Boats)</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Additional Information</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your experience level, any special requests, or questions you may have..."
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>

          <SubmitButton type="submit">Send Booking Request</SubmitButton>
          <FormNote>* Deposit required to hold your date</FormNote>
        </StyledForm>
      </FormContainer>
    </BookingSection>
  );
}
