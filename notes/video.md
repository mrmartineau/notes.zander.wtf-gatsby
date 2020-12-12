---
title: Video
emoji: 🎬
tags:
  - html
created: 2020-02-27T23:51:44.000Z
modified: 2020-02-27T23:51:44.000Z
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

## Autoplay

### Useful links

- https://webkit.org/blog/6784/new-video-policies-for-ios/
- https://docs.google.com/presentation/d/1DhW29bTLkDO6JSqp_wLUyByo00nI4krQ9laGQYQEJLU/edit
  - https://bitmovin.com/play-not-play-new-autoplay-policies-safari-11-chrome-64/

## Embedding YouTube/Vimeo etc

### YouTube

https://developers.google.com/youtube/player_parameters#Manual_IFrame_Embeds

### Vimeo

https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters

### Useful npm packages

- https://github.com/alanshaw/embed-video
- https://github.com/radiovisual/get-video-id
