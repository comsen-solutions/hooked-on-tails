import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles } from '@/styles/GlobalStyles'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LocalBusinessSchema } from '@/components/StructuredData'

export const metadata = {
  title: 'Hooked on Tails | New Orleans Fishing & Bowfishing Charters',
  description: 'Book a New Orleans fishing or bowfishing charter with Captain John Styron. Daytime rod & reel for redfish and speckled trout, or nighttime bowfishing adventures in the Louisiana marshes. All equipment provided.',
  metadataBase: new URL('https://hookedontailsbowfishing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hooked on Tails | New Orleans Fishing & Bowfishing Charters',
    description: 'Book a New Orleans fishing or bowfishing charter with Captain John Styron. Daytime rod & reel or nighttime bowfishing adventures in the Louisiana marshes.',
    url: 'https://hookedontailsbowfishing.com',
    siteName: 'Hooked on Tails',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navigation />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
