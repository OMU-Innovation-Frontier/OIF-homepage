export default function JsonLd() {
  const baseUrl = "https://oif-ai.com";

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OMU Innovation Frontier",
    "alternateName": "OIF",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "大阪公立大学のAI・プログラミングサークル。AIや機械学習に興味のある学生が集まるコミュニティです。",
    "keywords": "大阪公立大学 AI, 大阪公立大学 AIサークル, 大阪公立大学 プログラミングサークル, OMU AI, OIF, 機械学習, 深層学習",
    "foundingDate": "2024",
    "memberOf": {
      "@type": "EducationalOrganization",
      "name": "大阪公立大学",
      "alternateName": "OMU",
      "url": "https://www.omu.ac.jp"
    },
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
    "description": "大阪公立大学のAI・プログラミングサークル OIFの公式サイト。",
    "publisher": {
      "@type": "Organization",
      "name": "OMU Innovation Frontier",
      "alternateName": "OIF"
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
