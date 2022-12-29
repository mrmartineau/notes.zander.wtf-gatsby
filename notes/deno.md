---
title: Deno
tags:
  - deno
created: 2022-11-26T00:21:36:00Z
modified: 2022-12-29T00:15:19:00Z
link: https://deno.land
emoji: ⚡
---

### [3rd party modules](https://deno.land/x)

**[deno.land/x](https://deno.land/x?query=serve)** is a hosting service for Deno scripts. It caches releases of open-source modules stored on GitHub and serves them at an easy-to-remember domain.

Deno can import modules from any location on the web, like GitHub, a personal webserver, or a CDN like [esm.sh](https://esm.sh/), [Skypack](https://www.skypack.dev/), [jspm.io](https://jspm.io/) or [jsDelivr](https://www.jsdelivr.com/).

## Examples

### [deno.land](https://deno.land/x)

```ts
import { serve } from 'https://deno.land/std@0.131.0/http/server.ts'
```

### [esm.sh](https://esm.sh)

```ts
import { decode } from 'https://esm.sh/html-entities@2.3.3'
import type { SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.1.1'
```

### CDN

```ts
import urlJoin from 'https://cdn.skypack.dev/pin/proper-url-join@v2.1.1-SID2RKzIsZDaP6lwi1ZT/mode=imports,min/optimized/proper-url-join.js'
```

### [npm](https://deno.land/manual@v1.29.1/node)

```ts
import chalk from 'npm:chalk@5'
```

#### TS types

```ts
// @deno-types="npm:@types/express@^4.17"
import express from 'npm:express@^4.17'
```

## Publishing your own modules

All modules on deno.land/x need to be hosted as public repositories on GitHub.com.

deno.land/x downloads and stores your repository contents every time you create a git tag. We only do this once for every tag. This ensures that the contents we serve for a specific version can never change.
