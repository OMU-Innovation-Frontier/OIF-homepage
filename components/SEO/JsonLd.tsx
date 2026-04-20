import React from "react";

export default function JsonLd() {
  const baseUrl = "https://oif-ai.com";

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OIF",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "大阪公立大学のAI・IT学習コミュニティ。",
    "sameAs": [
      "https://github.com/OMU-Innovation-Frontier",
      "https://x.com/OIF_OMU",
      "https://www.instagram.com/omu.innovation.frontier/",
      "https://discord.gg/pEHeeYKUnX"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OIF - OMU Innovation Frontier",
    "url": baseUrl,
    "publisher": {
      "@type": "Organization",
      "name": "OMU Innovation Frontier"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}