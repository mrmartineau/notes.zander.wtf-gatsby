---
title: RenderIfRole
tags:
  - react
created: 2021-07-12T06:09:33.887Z
modified: 2021-07-12T06:12:59.182Z
---

```tsx
import { ReactNode } from 'react'
import { useUserContext } from '../../providers'
import { Roles } from '../../types/Roles'

export interface RenderIfRoleProps {
  roles: Roles[]
  children: ReactNode
}

export const RenderIfRole = ({
  roles,
  children,
}: RenderIfRoleProps): ReactNode | null => {
  const { role } = useUserContext() // get user's current role
  const providedRolesMatchUserRole = role && roles.includes(Roles[role])

  if (providedRolesMatchUserRole) {
    return children
  }
  return null
}
```

## Usage

This component is used to conditionally show content based on a user's role.

This link will only be shown if the current user's role matches `Roles.admin`

```tsx
<RenderIfRole roles={[Roles.admin]}>
  <RouterLink to={INVITE_PAGE_PATH} sx={{ variant: 'links.navLink' }}>
    Invite
  </RouterLink>
</RenderIfRole>
```

Multiple roles can be passed in to the `roles` prop, like so:

```tsx
<RenderIfRole roles={[Roles.client, Roles.trainee]}>Some content</RenderIfRole>
```
