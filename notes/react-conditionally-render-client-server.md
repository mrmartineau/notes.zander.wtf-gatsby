---
title: Conditionally render on the client or server
tags:
  - react
emoji: ⚛
created: 2022-08-17T09:08:55.000Z
modified: 2022-08-17T09:08:55.000Z
---

```tsx
import React, { useEffect, useState, ReactNode } from 'react'

export interface ConditionallyRenderProps {
  client?: boolean
  server?: boolean
  children?: ReactNode
}

const ConditionallyRender = ({
  client,
  server,
  children,
}: ConditionallyRenderProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted && client) {
    return null
  }

  if (isMounted && server) {
    return null
  }

  return children as React.ReactElement
}

export default ConditionallyRender
```

## Usage

```tsx
<Layout>
  <ConditionallyRender server>
    <p>This is rendered only on server.</p>
  </ConditionallyRender>
  <ConditionallyRender client>
    <p>This is rendered only on client.</p>
  </ConditionallyRender>
</Layout>
```
