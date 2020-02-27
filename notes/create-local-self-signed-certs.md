---
title: Create local self-signed certificate
---

Run this then follow the instructions

```sh
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./server.key -out ./server.crt
```
