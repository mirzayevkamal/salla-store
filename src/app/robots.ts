const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
  ? `https://${process.env.NEXT_PUBLIC_WEBSITE_URL}`
  : "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
