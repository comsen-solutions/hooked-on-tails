import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles } from '@/styles/GlobalStyles'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LocalBusinessSchema } from '@/components/StructuredData'

export const metadata = {
  title: 'Hooked on Tails | New Orleans Fishing & Bowfishing Charters',
  description: 'New Orleans fishing charters with Captain John Styron — daytime rod & reel for redfish or nighttime bowfishing in the Louisiana marshes. Book today.',
  metadataBase: new URL('https://hookedontailsbowfishing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hooked on Tails | New Orleans Fishing & Bowfishing Charters',
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
