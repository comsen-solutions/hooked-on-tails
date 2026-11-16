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

const ReviewNote = styled.p`
  max-width: 680px;
  margin: 0 auto 2rem;
  text-align: center;
  color: ${theme.colors.text.light};
  font-size: 1rem;
  line-height: 1.7;

  a { color: inherit; }
`;

const SourceName = styled.span`
  white-space: nowrap;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  color: #fff;
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

  &[href] {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
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

const ReviewSourceLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: ${theme.colors.text.primary};
  font-weight: 600;
  font-size: 0.9rem;
  text-underline-offset: 3px;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
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
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return "★".repeat(filled) + "☆".repeat(5 - filled);
}

function starsLabel(rating) {
  return `${Number(rating).toFixed(1)} out of 5 stars`;
}

export default function GoogleReviews({
  reviews = [],
  averageRating = 0,
  totalReviewCount = 0,
  reviewsUrl = "https://www.google.com/maps/search/?api=1&query=Hooked+on+Tails+Bowfishing+Charters",
  attributions = [],
}) {
  const hasReviews = reviews.length > 0;
  const hasRating = Number.isFinite(averageRating) && averageRating > 0 && totalReviewCount > 0;

  return (
    <ReviewsSection>
      <Container>
        <SectionTitle>What Our Guests Say</SectionTitle>
        {hasRating && <AggregateRating>
          <Stars aria-label={starsLabel(averageRating)} role="img">
            <span aria-hidden="true">{renderStars(averageRating)}</span>
          </Stars>
          {averageRating.toFixed(1)} out of 5 based on {totalReviewCount}{" "}
          {totalReviewCount === 1 ? "review" : "reviews"} on Google Maps
        </AggregateRating>}

        <ReviewNote>
          {hasReviews ? (
            <>Reviews from <SourceName translate="no">Google Maps</SourceName>, shown in Google&apos;s relevance order.</>
          ) : (
            <>Read what guests share about their fishing and bowfishing trips with Captain John on Google Maps.</>
          )}
        </ReviewNote>

        {hasReviews && <ReviewsGrid>
          {reviews.map((review) => (
            <ReviewCard key={review.id || `${review.authorName}-${review.relativeTime}`}>
              <ReviewHeader>
                {review.profilePhotoUrl ? (
                  <AuthorPhoto
                    src={review.profilePhotoUrl}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <PhotoPlaceholder>
                    {review.authorName.charAt(0)}
                  </PhotoPlaceholder>
                )}
                <AuthorInfo>
                  <AuthorName
                    as={review.authorUrl ? "a" : "div"}
                    href={review.authorUrl || undefined}
                    target={review.authorUrl ? "_blank" : undefined}
                    rel={review.authorUrl ? "noopener noreferrer" : undefined}
                  >
                    {review.authorName}
                  </AuthorName>
                  <ReviewTime>{review.relativeTime}</ReviewTime>
                </AuthorInfo>
              </ReviewHeader>
              <ReviewStars aria-label={starsLabel(review.rating)} role="img">
                <span aria-hidden="true">{renderStars(review.rating)}</span>
              </ReviewStars>
              {review.text && <ReviewText>{review.text}</ReviewText>}
              {review.translated && <ReviewTime>Translated by Google</ReviewTime>}
              <ReviewSourceLink
                href={review.reviewUrl || reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read review on Google Maps
              </ReviewSourceLink>
            </ReviewCard>
          ))}
        </ReviewsGrid>}

        {attributions.length > 0 && <ReviewNote>
          {attributions.map((attribution) => (
            <a key={attribution.url} href={attribution.url} target="_blank" rel="noopener noreferrer">
              {attribution.name}{" "}
            </a>
          ))}
        </ReviewNote>}

        <GoogleLink
          href={reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Guest Reviews on Google Maps
        </GoogleLink>
      </Container>
    </ReviewsSection>
  );
}
