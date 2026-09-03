import type { Metadata, Viewport } from 'next';
import { Oswald, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const display = Oswald({ variable: '--font-display', subsets: ['latin'], display: 'swap' });
const body = Source_Sans_3({ variable: '--font-body', subsets: ['latin'], display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cavalry-green-property-care.jessieleonne.chatgpt.site';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f2ebdd' };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Cavalry Green LLC | Lawn Care & Property Services', template: '%s' },
  description: 'Veteran-owned lawn care, landscaping, cleanup, and property maintenance serving Hope Mills and surrounding North Carolina communities.',
  applicationName: 'Cavalry Green LLC',
  icons: { icon: '/cavalry-green-logo.png', apple: '/cavalry-green-logo.png' },
  robots: { index: true, follow: true },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cavalry Green LLC',
  telephone: '+1-472-300-2290',
  areaServed: ['Hope Mills','Fayetteville','Raeford','Spring Lake','Cameron'].map(name => ({ '@type': 'City', name })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c') }} /></body></html>;
}
