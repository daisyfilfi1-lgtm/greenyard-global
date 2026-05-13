import Script from "next/script";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ningbo GreenYard Sprayer Co., Ltd.",
    alternateName: "GreenYard",
    url: "https://greenyardglobal.netlify.app",
    logo: "https://greenyardglobal.netlify.app/images/Minimalist%20Luxury%20Beauty%20Packaging%20Banner.png",
    description:
      "Premium B2B packaging solutions — precision sprayers, pumps, droppers, and cosmetic packaging with flexible MOQ, fast sampling, and fully recyclable pathways.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.97-1 Fengyi Road, Lanjiang Street",
      addressLocality: "Yuyao City",
      addressRegion: "Zhejiang",
      postalCode: "315400",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-574-6249-3001",
      email: "info@cngreenyard.com",
      contactType: "sales",
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: [
      "https://www.linkedin.com/company/greenyard",
      "https://www.youtube.com/@greenyard",
      "https://greenyard.en.alibaba.com/",
    ],
    hasCertification: [
      "ISO 15378",
      "FDA",
      "REACH",
      "RoHS",
      "California Prop 65",
    ],
  };

  return (
    <Script
      id="jsonld-organization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
