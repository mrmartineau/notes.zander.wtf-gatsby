---
title: Clear DNS cache
emoji: 💵
created: 2020-04-30T22:14:32.000Z
modified: 2020-04-30T22:14:32.000Z
---

## OS X 10.11, 10.12+ (El Capitan, Sierra):

```sh
sudo killall -HUP mDNSResponder
```

Source: https://superuser.com/a/547218/89928

## In Chrome

Navigate to [`chrome://net-internals/#dns`](chrome://net-internals/#dns) and press the "Clear host cache" button.
