---
title: Stimulus cheatsheet
tags:
  - javascript
created: 2020-06-23T16:45:15.000Z
modified: 2020-06-23T16:45:15.000Z
---

- Website: https://stimulusjs.org/
- GitHub repo: https://github.com/stimulusjs/stimulus
- Handbook: https://stimulusjs.org/handbook/introduction
- Discourse: https://discourse.stimulusjs.org/

## Lifecycle callbacks

- `initialize`: once, when the controller is first instantiated
- `connect`: anytime the controller is connected to the DOM
- `disconnect`: anytime the controller is disconnected from the DOM

## Action descriptors
The data-action value `click->hello#greet` is called an action descriptor. This particular descriptor says:

- `click` is the event name
- `hello` is the controller identifier
- `greet` is the name of the method to invoke

### Common Events Have a Shorthand Action Notation
Stimulus defines click as the default event for actions on `<button>` elements. Certain other elements have default events, too. Here’s the full list:

#### Element > Default event
- `a` > `click`
- `button` > `click`
- `form` > `submit`
- `input` > `change`
- `input` > `type=submit	click`
- `select` > `change`
- `textarea` > `change`

### Multiple Actions
If an element has muliple actions you can separate each one with a space `click->hello#greet click->hello#save`.

The element can even have multiple actions for multiple controllers `click->hello#greet click->history#save`.

## Targets
The data-target value `hello.name` is called a target descriptor. This particular descriptor says:

- `hello` is the controller identifier
- `name` is the target name

When Stimulus loads your controller class, it looks for target name strings in a static array called targets. For each target name in the array, Stimulus adds three new properties to your controller. Here, our `source` target name becomes the following properties:

- `this.sourceTarget` evaluates to the first source target in your controller’s scope. If there is no source target, accessing the property throws an error.
- `this.sourceTargets` evaluates to an array of all source targets in the controller’s scope.
- `this.hasSourceTarget` evaluates to true if there is a source target or false if not.

### Multiple Targets
If an element is a target for multiple controllers you can separate each one with a space `hello.name history.text`

## Naming Conventions

| Component            | Convention             | Rationale                                                                                                     |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| Controller filenames | snake_case.js          | Rails works that way                                                                                          |
| Identifiers          | kebab-case             | Sometimes used as part of HTML attribute names; analogous to CSS classes, which are conventionally kebab-case |
| Action names         | camelCase              | Map directly to JavaScript controller methods                                                                 |
| Target names         | camelCase              | Map directly to JavaScript controller properties                                                              |
| Data attributes      | camelCase + kebab-case | Thin wrapper around the HTMLElement.dataSet API; camelCase names in JS, kebab-case attributes in HTML         |

## Data API
Each Stimulus controller has a `this.data` object with `has()`, `get()`, and `set()` methods. These methods provide convenient access to data attributes on the controller’s element, scoped by the controller’s identifier.

For example, in our controller above:

- `this.data.has("index")` returns `true` if the controller’s element has a `data-slideshow-index` attribute
- `this.data.get("index")` returns the string value of the element’s `data-slideshow-index` attribute
- `this.data.set("index", index)` sets the element’s `data-slideshow-index` attribute to the string value of index

If your attribute name consists of more than one word, **reference it as camelCase in JavaScript and attribute-case in HTML**. For example, you can read the `data-slideshow-current-class-name` attribute with `this.data.get("currentClassName")`.

## HTML API
### Controller `data-controller`
e.g. `<div data-controller="ControllerName">`

e.g. Multiple controllers on the same element: `<div data-controller="ControllerName AnotherControllerName">`

### Target `data-target`
e.g. `<input data-target="ControllerName.TargetName"`>

### Action `data-action`
e.g. `<button data-action="eventName->ControllerName#methodName">Click me</button>`

e.g. Multiple actions on the same element: `<button data-action="eventName->ControllerName#methodName anotherEventName->ControllerName#anotherMethodName">Click me</button>`


## Code snippets

### Empty class
```js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = []

  // or
  static get targets () {
    return []
  }

  initialize () {}

  connect () {}

  disconnect () {}
}
```

### HTML
Example HTML from the [Stimulus](https://stimulusjs.org/) home page
```html
<div data-controller="hello">
  <input data-target="hello.name" type="text">

  <button data-action="click->hello#greet">
    Greet
  </button>

  <span data-target="hello.output">
  </span>
</div>
```
