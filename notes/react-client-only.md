---
title: Client-only React
tags:
  - react
emoji: 🎣
link: 'https://joshwcomeau.com/react/the-perils-of-rehydration/'
created: 2020-06-11T14:47:15.000Z
modified: 2020-06-11T14:47:15.000Z
---

## A client-only wrapper component

```jsx
export const ClientOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return <div {...delegated}>{children}</div>
}
```

Use like so:

```jsx
<ClientOnly>
  <Navigation />
</ClientOnly>
```

or you could use a hook:

```jsx
export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}
```

Which could be used like so:

```jsx
function Navigation() {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  const user = getUser()

  if (user) {
    return <AuthenticatedNav user={user} />
  }

  return (
    <nav>
      <a href="/login">Login</a>
    </nav>
  )
}
```
