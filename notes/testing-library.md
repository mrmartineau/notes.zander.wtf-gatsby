---
title: Testing library
tags:
  - testing
emoji: 🧪
link: 'https://testing-library.com'
created: 2020-03-25T17:00:14.000Z
modified: 2020-05-11T11:47:16.000Z
---

## DOM

https://testing-library.com/docs/dom-testing-library/intro

### Queries

https://testing-library.com/docs/dom-testing-library/api-queries

#### Variants

##### getBy

`getBy*` queries return the first matching node for a query, and throw an error
if no elements match or if more than one match is found (use `getAllBy`
instead).

##### getAllBy

`getAllBy*` queries return an array of all matching nodes for a query, and throw
an error if no elements match.

##### queryBy

`queryBy*` queries return the first matching node for a query, and return `null`
if no elements match. This is useful for asserting an element that is not
present. This throws if more than one match is found (use `queryAllBy` instead).

##### queryAllBy

`queryAllBy*` queries return an array of all matching nodes for a query, and
return an empty array (`[]`) if no elements match.

##### findBy

`findBy*` queries return a promise which resolves when an element is found which
matches the given query. The promise is rejected if no element is found or if
more than one element is found after a default timeout of `4500`ms. If you need
to find more than one element, then use `findAllBy`.

> Note, this is a simple combination of `getBy*` queries and
> [`waitForElement`](/docs/api-async#waitforelement). The `findBy*` queries
> accept the `waitForElement` options as the last argument. (i.e.
> `findByText(container, 'text', queryOptions, waitForElementOptions)`)

##### findAllBy

`findAllBy*` queries return a promise which resolves to an array of elements
when any elements are found which match the given query. The promise is rejected
if no elements are found after a default timeout of `4500`ms.

## React

https://testing-library.com/docs/react-testing-library/intro

```js
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('Given a Button component', () => {
  describe('when it is rendered', () => {
    test('should have the text `This is a button`', () => {
      // Arrange
      const { getByText } = render(<Button>This is a button</Button>)

      // Act
      fireEvent.click(getByText('This is a button'))

      // Assert
      expect(getByText('This is a button')).toHaveTextContent(
        'This is a button'
      )
    })
  })
})
```

## Cypress

https://testing-library.com/docs/cypress-testing-library/intro

```js
cy.findAllByText('Jackie Chan').click()
cy.findByText('Button Text').should('exist')
cy.findByText('Non-existing Button Text').should('not.exist')
cy.findByLabelText('Label text', { timeout: 7000 }).should('exist')

// findAllByText _inside_ a form element
cy.get('form').findByText('Button Text').should('exist')
cy.get('form').then((subject) => {
  cy.findByText('Button Text', { container: subject }).should('exist')
})
```
