export default function sitemap() {
  const baseUrl = 'https://hookedontailsbowfishing.com'
  const siteLastModified = '2026-05-13'
  const bookingImprovementsLastModified = '2026-11-16'

  return [
    {
      url: baseUrl,
      lastModified: bookingImprovementsLastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/bowfishing`,
      lastModified: bookingImprovementsLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rod-and-reel`,
      lastModified: bookingImprovementsLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/captain`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: bookingImprovementsLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: bookingImprovementsLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
