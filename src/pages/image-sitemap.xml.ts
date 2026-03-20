import type { APIRoute } from "astro";
import { bioPage, creativeCluster, homePage } from "../data/editorial";
import { canonicalSiteUrl } from "../data/site";

type ImageSitemapEntry = {
  page: string;
  images: string[];
};

const imageEntries: ImageSitemapEntry[] = [
  {
    page: `${canonicalSiteUrl}/`,
    images: [homePage.contact.portraitSrc],
  },
  {
    page: `${canonicalSiteUrl}/bio/`,
    images: [bioPage.portraitSrc],
  },
  {
    page: `${canonicalSiteUrl}/creative/`,
    images: creativeCluster.landing.featuredImage ? [creativeCluster.landing.featuredImage.src] : [],
  },
  {
    page: `${canonicalSiteUrl}/creative/headshots/`,
    images: creativeCluster.headshots.items.map((item) => item.src),
  },
  {
    page: `${canonicalSiteUrl}/creative/photoshoots/`,
    images: creativeCluster.photoshoots.groups.flatMap((group) => group.items.map((item) => item.src)),
  },
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toAbsoluteUrl = (path: string) => new URL(path, canonicalSiteUrl).toString();

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${imageEntries
    .map(({ page, images }) => {
      const uniqueImages = Array.from(new Set(images.filter(Boolean).map(toAbsoluteUrl)));

      return `  <url>\n    <loc>${escapeXml(page)}</loc>\n${uniqueImages
        .map((image) => `    <image:image>\n      <image:loc>${escapeXml(image)}</image:loc>\n    </image:image>`)
        .join("\n")}\n  </url>`;
    })
    .join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
