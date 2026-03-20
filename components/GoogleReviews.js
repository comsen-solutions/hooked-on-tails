"use client";

import styled from "styled-components";
import { theme } from "@/lib/theme";

const ReviewsSection = styled.section`
  padding: 6rem 5%;
  background: ${theme.gradients.dark};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${theme.colors.text.white};
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

const AggregateRating = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: ${theme.colors.text.light};
  font-size: 1.2rem;
`;

const Stars = styled.span`
  color: ${theme.colors.primary.main};
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-right: 0.5rem;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: ${theme.colors.text.white};
  border-radius: ${theme.borderRadius.medium};
  padding: 2rem;
  box-shadow: ${theme.shadows.card};
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.cardHover};
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const AuthorPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  object-fit: cover;
`;

const PhotoPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  background: ${theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${theme.colors.text.primary};
  font-size: 1.1rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: bold;
  color: ${theme.colors.text.primary};
  font-size: 1rem;
`;

const ReviewTime = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 0.85rem;
`;

const ReviewStars = styled.div`
  color: ${theme.colors.primary.main};
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
`;

const ReviewText = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const GoogleLink = styled.a`
  display: block;
  text-align: center;
  padding: 1rem 2rem;
  background: ${theme.gradients.primary};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  border-radius: ${theme.borderRadius.large};
  font-size: 1.1rem;
  font-weight: bold;
  max-width: 400px;
  margin: 0 auto;
  transition: all 0.3s;
  box-shadow: ${theme.shadows.gold};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.goldHover};
  }
`;

function renderStars(rating) {
  const filled = Math.round(rating);
  return "★".repeat(filled) + "☆".repeat(5 - filled);
}

export default function GoogleReviews({
  reviews,
  averageRating,
  totalReviewCount,
  placeId,
}) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <ReviewsSection>
      <Container>
        <SectionTitle>What Our Guests Say</SectionTitle>
        <AggregateRating>
          <Stars>{renderStars(averageRating)}</Stars>
          {averageRating.toFixed(1)} out of 5 based on {totalReviewCount}{" "}
          Google reviews
        </AggregateRating>

        <ReviewsGrid>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <ReviewHeader>
                {review.profilePhotoUrl ? (
                  <AuthorPhoto
                    src={review.profilePhotoUrl}
                    alt={review.authorName}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <PhotoPlaceholder>
                    {review.authorName.charAt(0)}
                  </PhotoPlaceholder>
                )}
                <AuthorInfo>
                  <AuthorName>{review.authorName}</AuthorName>
                  <ReviewTime>{review.relativeTime}</ReviewTime>
                </AuthorInfo>
              </ReviewHeader>
              <ReviewStars>{renderStars(review.rating)}</ReviewStars>
              <ReviewText>{review.text}</ReviewText>
            </ReviewCard>
          ))}
        </ReviewsGrid>

        <GoogleLink
          href={`https://search.google.com/local/reviews?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Reviews on Google
        </GoogleLink>
      </Container>
    </ReviewsSection>
  );
}
