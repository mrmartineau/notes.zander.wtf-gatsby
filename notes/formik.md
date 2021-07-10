---
title: Formik
tags:
  - react
  - typescript
link: https://formik.org/docs/overview
modified: 2021-07-10T07:22:26.268Z
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
