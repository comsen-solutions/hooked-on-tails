export default function sitemap() {
  const baseUrl = 'https://hookedontailsbowfishing.com'
  const siteLastModified = '2026-05-13'
  const fishingLastModified = '2026-09-09'

  return [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/bowfishing`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rod-and-reel`,
      lastModified: fishingLastModified,
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
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: fishingLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
