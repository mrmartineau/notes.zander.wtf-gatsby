---
title: Video
emoji: 🎬
tags:
  - html
---

```html
<video width="640" height="360" controls>
  <!-- MP4 must be first for iPad! -->
  <source src="__VIDEO__.mp4" type="video/mp4" />
  <!-- Safari / iOS video    -->
  <source src="__VIDEO__.ogv" type="video/ogg" />
  <!-- Firefox / Opera / Chrome10 -->
</video>
<!-- you *must* offer a download link as they may be able to play the file locally. customise this bit all you want -->
<p>
  <strong>Download Video:</strong> Closed Format:
  <a href="__VIDEO__.MP4">"MP4"</a> Open Format:
  <a href="__VIDEO__.OGV">"Ogg"</a>
</p>
```
