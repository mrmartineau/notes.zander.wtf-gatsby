---
title: Vitest
tags:
  - testing
created: 2022-06-14T15:45:25Z
modified: 2022-06-14T15:45:25Z
link: https://vitest.dev
emoji: ⚡
---

### `vitest.config.ts`

```ts
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
```

### `vitest.setup.ts`

Add anything to this file that you want run before each test.

If you use the default vitest config value for `globals` and you want to use `jest-dom`:

```ts
import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

expect.extend(matchers)
```

If you want `jest-dom` and use `globals: true` in your config:

```ts
import '@testing-library/jest-dom'
```

If you're using Remix:

```ts
import { installGlobals } from '@remix-run/node/globals'
installGlobals()
```
