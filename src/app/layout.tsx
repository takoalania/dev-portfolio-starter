import './globals.css';
import { siteConfig } from '@/config';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.bio,
  metadataBase: new URL(siteConfig.website),
  openGraph: {
    title: `${siteConfig.name} – ${siteConfig.title}`,
    description: siteConfig.bio,
    url: siteConfig.website,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
    type: 'website',
  },
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
