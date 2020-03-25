---
title: Jest
tags:
  - javascript
  - react
  - testing
---

## Basic test skeleton

```js
describe('Given a xxx', () => {
  describe('when it is rendered', () => {
    test('it should ', () => {
      // Arrange

      // Act

      // Assert
      expect(true).toBe(true)
    })
  })
})
```



### Snapshot test

```js
import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Given a Button', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Button />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})

// with snapshot-diff
const { getByText, asFragment } = render(<TestComponent />)
const firstRender = asFragment()
fireEvent.click(getByText(/Click to increase/))
// This will snapshot only the difference between the first render, and the
// state of the DOM after the click event.
// See https://github.com/jest-community/snapshot-diff
expect(firstRender).toMatchDiffSnapshot(asFragment())
```

### Throw

```js
import { formatDate } from './formatDate'

describe('Given a formatDate util', () => {
  describe('when passing a valid 8-digit date string', () => {
    test('it should return a valid ISO formatted date string', () => {
      expect(formatDate('19790118')).toBe('1979-01-18T00:00:00.000Z')
    })
  })

  describe('when passing an invalid string', () => {
    test('it should throw', () => {
      expect(() => formatDate('197901180')).toThrow(
        'Date string wrong format/length'
      )

      expect(() => formatDate('abcdefgh')).toThrow(
        'Date string must be only digits'
      )
    })
  })
})
```
