---
title: oEmbed
tags:
  - javascript
  - html
---

[oEmbed.com](https://oembed.com/)

Default providers list: https://oembed.com/providers.json

Example provider scheme:

```
{
  "provider_name": "Twitter",
  "provider_url": "http:\/\/www.twitter.com\/",
  "endpoints": [
    {
      "schemes": [
        "https:\/\/twitter.com\/*\/status\/*",
        "https:\/\/*.twitter.com\/*\/status\/*"
      ],
      "url": "https:\/\/publish.twitter.com\/oembed"
    }
  ]
},
```

Example oEmbed link for Twitter

```
https://publish.twitter.com/oembed?url=https://twitter.com/Interior/status/463440424141459456
```
