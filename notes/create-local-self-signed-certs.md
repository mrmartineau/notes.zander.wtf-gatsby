---
title: Create local self-signed certificate
emoji: 📜
created: 2020-02-27T23:51:44.000Z
modified: 2020-04-06T08:28:28.000Z
---

## Use mkcert

https://github.com/FiloSottile/mkcert

### Install

```sh
brew install mkcert
brew install nss
mkcert -install
```

```sh
$ mkcert -install
Created a new local CA at "/Users/zander/Library/Application Support/mkcert" 💥
The local CA is now installed in the system trust store! ⚡️
The local CA is now installed in the Firefox trust store (requires browser restart)! 🦊
```

### Run

```sh
mkcert localhost 127.0.0.1 ::1
```

```sh
$ mkcert localhost 127.0.0.1 ::1
Using the local CA at "/Users/zander/Library/Application Support/mkcert" ✨

Created a new certificate valid for the following names 📜
 - "localhost"
 - "127.0.0.1"
 - "::1"

The certificate is at "./localhost+2.pem" and the key at "./localhost+2-key.pem" ✅
```

This will add the certificate and key into whichever directory you ran the script in

## Use openssl

Run this then follow the instructions.

```sh
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./server.key -out ./server.crt
```

This is not nearly as good as mkcert though.
