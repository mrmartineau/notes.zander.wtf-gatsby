---
title: Formik
tags:
  - react
  - typescript
link: https://formik.org/docs/overview
emoji: ⚛
modified: 2021-11-11T12:25:28.505Z
---

## Simple example

```tsx
import React from 'react'
import { Formik, ErrorMessage, ErrorMessage, FormikHelpers, Form } from 'formik'

interface SignupFormValues {
  email: string
  password: string
  firstName: string
  lastName: string
}

export const SignupForm = (): JSX.Element => {
  const [formError, setFormError] = useState<string>('')

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }}
      onSubmit={async (
        values: SignupFormValues,
        actions: FormikHelpers<SignupFormValues>,
      ) => {
        // submit form data to API
      }}
    >
      {({ handleChange, handleBlur, values, isSubmitting, getFieldProps }) => (
        <Form>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              autoComplete="given-name"
              {...getFieldProps('firstName')}
            />
            <ErrorMessage name="firstName">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              autoComplete="family-name"
              {...getFieldProps('lastName')}
            />
            <ErrorMessage name="lastName">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input type="email" {...getFieldProps('email')} />
            <ErrorMessage name="email">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" {...getFieldProps('password')} />
            <ErrorMessage name="password">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}
```

## Using Yup for validation

```tsx
import React from 'react'
import { Formik } from 'formik'

interface SignupFormValues {
  email: string
  password: string
  firstName: string
  lastName: string
}

const InviteSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8).max(200),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string(),
})
```

## Common patterns

### Loading state

Use the `useToggle` hook to manipulate loading state for your form. When used correctly, the `Button` component will show a loading indicator when the form is submitting.

```tsx
// initialise the state
const [formSubmitting, , setFormSubmitting] = useToggle()

// change it when the user submits the form
onSubmit={async (values: FormValues) => {
  setFormSubmitting(true) // <-- here
  try {
    // call your API to submit the form
  } catch (error: unknown) {
    // catch any errors
    let errorMessage = 'error.unknown'
    if (typeof error === 'string') {
      errorMessage = error.toUpperCase()
    } else if (error instanceof Error) {
      errorMessage = error.message
    }
    setFormError(errorMessage)
    setFormSubmitting(false) // <-- here
  }
}}

// use it on the button
<Button
  type="submit"
  isLoading={formSubmitting}
>
  Submit
</Button>
```

### Submission errors

Use a `useState` hook to set any errors that occur during form validation.

```tsx
// initialise the state
const [formError, setFormError] = useState<string>('')

// set the error when the form is submitted
onSubmit={async (values: FormValues) => {
  setFormSubmitting(true)
  try {
    // call your API to submit the form
  } catch (error: unknown) {
    // catch any errors
    let errorMessage = 'error.unknown'
    if (typeof error === 'string') {
      errorMessage = error.toUpperCase()
    } else if (error instanceof Error) {
      errorMessage = error.message
    }
    setFormError(errorMessage) // <-- here
    setFormSubmitting(false)
  }
}}

// Render a message if there are errors
{formError && <Alert variant="error">{formError}</Alert>}
```

Another aspect is to "disable" the submit button when there are validation errors. Use the `isValid` prop from Formik to determine if the form is valid, then set the `isDisabled` prop on the `Button` component. This will prevent the button from being clicked and show a useful message to the user notifying them of the issue.

```tsx
<Button
  type="submit"
  sx={{ mt: 2 }}
  isLoading={formSubmitting}
  isDisabled={!isValid}
  disabledText="Please fix the form validation errors"
>
  Submit
</Button>
```

### Validation

Use the `Yup` library to validate the form. It is used in many forms in the app.

Create your form schema:

```ts
const FormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: passwordValidation,
})
```
