---
title: oEmbed
tags:
  - javascript
  - html
link: 'https://oembed.com/'
created: 2020-03-03T09:46:27.000Z
modified: 2020-06-30T21:18:03.000Z
---

Default providers list: https://oembed.com/providers.json

Example provider scheme:

```json
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
