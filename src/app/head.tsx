import { siteConfig } from '@/config';

export default function Head() {
  return (
    <>
      <title>{siteConfig.name} – {siteConfig.title}</title>
      <meta name="description" content={siteConfig.bio} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.website} />
      <meta property="og:title" content={`${siteConfig.name} – ${siteConfig.title}`} />
      <meta property="og:description" content={siteConfig.bio} />
      <meta property="og:image" content={`${siteConfig.website}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
