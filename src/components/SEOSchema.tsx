import { Helmet } from 'react-helmet-async';

interface SEOSchemaProps {
  type: 'organization' | 'product' | 'faq' | 'medicalDevice' | 'article' | 'breadcrumb';
  data?: any;
}

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prognosys Medical Systems Pvt. Ltd.",
  "alternateName": "Prognosys Medical",
  "url": "https://prognosysmedical.com",
  "logo": "https://prognosysmedical.com/logo.png",
  "description": "India's leading manufacturer of US FDA & CE certified medical imaging solutions including digital radiography, fluoroscopy, and point-of-care systems.",
  "foundingDate": "2006",
  "founders": [
    {
      "@type": "Person",
      "name": "Dr. Rajesh Kumar"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 35, KIADB Industrial Area, Electronic City Phase 1",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560100",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-80-2662-5765",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-80-2662-5766",
      "contactType": "technical support",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"],
      "hoursAvailable": "Mo-Su 00:00-23:59"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/prognosys-medical-systems",
    "https://twitter.com/prognosysmed",
    "https://www.facebook.com/prognosysmedical"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "US FDA Registration"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "CE Mark"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "ISO 13485:2016"
    }
  ]
};

// Product Schema Generator
const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  sku?: string;
  category: string;
  features?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "sku": product.sku,
  "brand": {
    "@type": "Brand",
    "name": "ProRad"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Prognosys Medical Systems Pvt. Ltd."
  },
  "category": product.category,
  "audience": {
    "@type": "Audience",
    "audienceType": "Healthcare Professionals"
  },
  "additionalProperty": product.features?.map(feature => ({
    "@type": "PropertyValue",
    "name": "Feature",
    "value": feature
  })),
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "seller": {
      "@type": "Organization",
      "name": "Prognosys Medical Systems"
    }
  }
});

// Medical Device Schema
const generateMedicalDeviceSchema = (device: {
  name: string;
  description: string;
  image: string;
  manufacturer: string;
  modelNumber?: string;
  regulatoryStatus?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalDevice",
  "name": device.name,
  "description": device.description,
  "image": device.image,
  "manufacturer": {
    "@type": "Organization",
    "name": device.manufacturer
  },
  "model": device.modelNumber,
  "legalStatus": device.regulatoryStatus?.join(", "),
  "relevantSpecialty": [
    "Radiology",
    "Diagnostic Imaging",
    "Orthopaedics"
  ],
  "purpose": "Diagnostic medical imaging",
  "safetyConsideration": "Must be operated by trained medical professionals only"
});

// FAQ Schema Generator
const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Article Schema Generator
const generateArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": article.author || "Prognosys Medical Systems"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prognosys Medical Systems",
    "logo": {
      "@type": "ImageObject",
      "url": "https://prognosysmedical.com/logo.png"
    }
  }
});

// Breadcrumb Schema Generator
const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Default FAQ data
const defaultFAQs = [
  {
    question: "What certifications do Prognosys medical devices have?",
    answer: "All Prognosys medical devices are US FDA registered, CE marked, and ISO 13485:2016 certified, meeting the highest international quality and safety standards."
  },
  {
    question: "What is the warranty period for ProRad products?",
    answer: "All ProRad products come with a standard 2-year comprehensive warranty covering parts and labor. Extended warranty options up to 5 years are available."
  },
  {
    question: "Does Prognosys provide installation and training?",
    answer: "Yes, we provide complete installation services and comprehensive training for operators, radiographers, and biomedical engineers with every equipment purchase."
  },
  {
    question: "What is the typical response time for service requests?",
    answer: "For critical issues, we guarantee a response within 4 hours and on-site visit within 24 hours. Standard requests are addressed within 24-48 hours."
  },
  {
    question: "Which countries does Prognosys serve?",
    answer: "Prognosys serves healthcare institutions across 30+ countries including India, Middle East, Africa, Southeast Asia, and Central Asia through our direct operations and distributor network."
  }
];

// Default Products
const defaultProducts = [
  {
    name: "PRORAD PREMIUM II (R9+) C-ARM",
    description: "Advanced Flat Panel Detector C-arm system for orthopedics, cardiology, neurology, and pain management with DICOM integration and 10-inch touchscreen console.",
    image: "https://prognosysmedical.com/products/premium-ii-fpd.jpg",
    sku: "PRD-PRM2-FPD",
    category: "Fluoroscopy Systems",
    features: ["Flat Panel Detector", "DICOM Integration", "Dose Management", "Wireless Operation"]
  },
  {
    name: "PRORAD 3NC Ceiling Suspended Radiography",
    description: "Fully automated ceiling-suspended digital radiography system with auto tracking, centering, positioning, and stitching functions for high-volume imaging.",
    image: "https://prognosysmedical.com/products/3nc.jpg",
    sku: "PRD-3NC",
    category: "Digital Radiography Systems",
    features: ["Auto Tracking", "Auto Positioning", "Dual Detector Options", "High Throughput"]
  },
  {
    name: "PRORAD Atlas Mobile Digital X-Ray",
    description: "Compact, portable mobile digital X-ray system for bedside radiology in ICU, emergency, and operating rooms with touchscreen console.",
    image: "https://prognosysmedical.com/products/atlas.jpg",
    sku: "PRD-ATLAS",
    category: "Mobile Radiography Systems",
    features: ["Touchscreen Console", "Wireless Detector", "Maximum Mobility", "Instant Preview"]
  }
];

const SEOSchema = ({ type, data }: SEOSchemaProps) => {
  let schema;

  switch (type) {
    case 'organization':
      schema = organizationSchema;
      break;
    case 'product':
      schema = data ? generateProductSchema(data) : defaultProducts.map(p => generateProductSchema(p));
      break;
    case 'medicalDevice':
      schema = data ? generateMedicalDeviceSchema(data) : generateMedicalDeviceSchema({
        name: "ProRad Digital Radiography System",
        description: "US FDA registered and CE certified digital radiography system for medical imaging",
        image: "https://prognosysmedical.com/products/prorad.jpg",
        manufacturer: "Prognosys Medical Systems Pvt. Ltd.",
        modelNumber: "PRORAD Series",
        regulatoryStatus: ["US FDA 510(k)", "CE Mark", "ISO 13485:2016"]
      });
      break;
    case 'faq':
      schema = generateFAQSchema(data || defaultFAQs);
      break;
    case 'article':
      schema = data ? generateArticleSchema(data) : null;
      break;
    case 'breadcrumb':
      schema = data ? generateBreadcrumbSchema(data) : null;
      break;
    default:
      schema = organizationSchema;
  }

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(Array.isArray(schema) ? schema : schema)}
      </script>
    </Helmet>
  );
};

// Combined Schema for Home Page
export const HomePageSchema = () => (
  <>
    <SEOSchema type="organization" />
    <SEOSchema type="faq" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Prognosys Medical Systems",
          "url": "https://prognosysmedical.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://prognosysmedical.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  </>
);

// Product Page Schema
export const ProductPageSchema = ({ product }: { product: any }) => (
  <>
    <SEOSchema type="product" data={product} />
    <SEOSchema type="medicalDevice" data={product} />
    <SEOSchema type="breadcrumb" data={[
      { name: "Home", url: "https://prognosysmedical.com" },
      { name: "Products", url: "https://prognosysmedical.com/products" },
      { name: product.category, url: `https://prognosysmedical.com/products/${product.category.toLowerCase()}` },
      { name: product.name, url: `https://prognosysmedical.com/products/${product.id}` }
    ]} />
  </>
);

// Support Page Schema
export const SupportPageSchema = () => (
  <SEOSchema type="faq" data={[
    {
      question: "What is the warranty period for ProRad products?",
      answer: "All ProRad products come with a standard 2-year comprehensive warranty covering parts and labor. Extended warranty options up to 5 years are available for purchase."
    },
    {
      question: "How do I schedule a preventive maintenance visit?",
      answer: "You can schedule preventive maintenance by calling our support hotline, emailing service@prognosysmedical.com, or submitting a request through our online portal."
    },
    {
      question: "What is the typical response time for service requests?",
      answer: "For critical issues, we guarantee a response within 4 hours and on-site visit within 24 hours. For non-critical issues, response time is typically within 24-48 hours."
    },
    {
      question: "Do you provide training for new equipment?",
      answer: "Yes, comprehensive training is included with every installation. We provide hands-on training for operators, radiographers, and biomedical engineers."
    },
    {
      question: "Is remote diagnostics available?",
      answer: "Yes, our ProDigi Health connected systems support remote diagnostics. Our technical team can remotely access system logs, run diagnostics, and perform software updates."
    }
  ]} />
);

export default SEOSchema;
