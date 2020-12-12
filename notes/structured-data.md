---
title: Schema.org structured data
created: 2020-06-04T13:43:19.000Z
modified: 2020-06-04T13:43:19.000Z
---

## JSON-LD

### Article

https://developers.google.com/search/docs/data-types/article

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://google.com/article"
    },
    "headline": "Article headline",
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
    ],
    "datePublished": "2015-02-05T08:00:00+08:00",
    "dateModified": "2015-02-05T09:20:00+08:00",
    "author": {
      "@type": "Person",
      "name": "John Doe"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Google",
      "logo": {
        "@type": "ImageObject",
        "url": "https://google.com/logo.jpg"
      }
    }
  }
</script>
```

### Product

https://developers.google.com/search/docs/data-types/product

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Executive Anvil",
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
    ],
    "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
    "sku": "0446310786",
    "mpn": "925872",
    "brand": {
      "@type": "Brand",
      "name": "ACME"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Fred Benson"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "89"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://example.com/anvil",
      "priceCurrency": "USD",
      "price": "119.99",
      "priceValidUntil": "2020-11-20",
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Executive Objects"
      }
    }
  }
</script>
```
