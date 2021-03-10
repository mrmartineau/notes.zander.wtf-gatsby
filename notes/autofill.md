---
title: Form autofill attributes
tags:
  - html
created: 2020-12-29T10:31:32.000Z
modified: 2021-03-10T07:10:14.000Z
---

Spec: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill

## All tokens

- `name`
- `honorific-prefix`
- `given-name`
- `additional-name`
- `family-name`
- `honorific-suffix`
- `nickname`
- `username`
- `new-password`
- `current-password`
- `one-time-code`
- `organization-title`
- `organization`
- `street-address`
- `address-line1`
- `address-line2`
- `address-line3`
- `address-level4`
- `address-level3`
- `address-level2`
- `address-level1`
- `country`
- `country-name`
- `postal-code`
- `cc-name`
- `cc-given-name`
- `cc-additional-name`
- `cc-family-name`
- `cc-number`
- `cc-exp`
- `cc-exp-month`
- `cc-exp-year`
- `cc-csc`
- `cc-type`
- `transaction-currency`
- `transaction-amount`
- `language`
- `bday`
- `bday-day`
- `bday-month`
- `bday-year`
- `sex`
- `url`
- `photo`

There's also a very handy table [here](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) if you scroll down a bit describing each token in detail.

## Examples

### Name

```html
<label for="frmNameA">Name</label>
<input
  name="name"
  id="frmNameA"
  placeholder="Full name"
  required
  autocomplete="name"
/>
```

### Email

```html
<label for="frmEmailA">Email</label>
<input
  type="email"
  name="email"
  id="frmEmailA"
  placeholder="name@example.com"
  required
  autocomplete="email"
/>

<label for="frmEmailC">Confirm Email</label>
<input
  type="email"
  name="emailC"
  id="frmEmailC"
  placeholder="name@example.com"
  required
  autocomplete="email"
/>
```

### Address

```html
<label for="frmAddressS">Address</label>
<input
  name="ship-address"
  required
  id="frmAddressS"
  placeholder="123 Any Street"
  autocomplete="shipping street-address"
/>

<label for="frmCityS">City</label>
<input
  name="ship-city"
  required
  id="frmCityS"
  placeholder="New York"
  autocomplete="shipping locality"
/>

<label for="frmStateS">State</label>
<input
  name="ship-state"
  required
  id="frmStateS"
  placeholder="NY"
  autocomplete="shipping region"
/>

<label for="frmZipS">Zip</label>
<input
  name="ship-zip"
  required
  id="frmZipS"
  placeholder="10011"
  autocomplete="shipping postal-code"
/>

<label for="frmCountryS">Country</label>
<input
  name="ship-country"
  required
  id="frmCountryS"
  placeholder="USA"
  autocomplete="shipping country"
/>
```

#### Shipping and billing

```html
<textarea
  name="shipping-address"
  autocomplete="shipping street-address"
></textarea>
<input
  type="text"
  name="shipping-city"
  autocomplete="shipping address-level2"
/>
<input
  type="text"
  name="shipping-state"
  autocomplete="shipping address-level1"
/>
<input
  type="text"
  name="shipping-country"
  autocomplete="shipping country-name"
/>
<input
  type="text"
  name="shipping-postal-code"
  autocomplete="shipping postal-code"
/>
```

### Telephones, email and instant messaging

```html
<input type="tel" name="home-phone" autocomplete="home tel" />
<input type="tel" name="work-phone" autocomplete="work tel" />
<input type="email" name="home-email" autocomplete="home email" />
<input type="url" name="chat" autocomplete="home impp" />
```

In addition to the `tel` field which would be a single input containing a full telephone number, there are also:

- `tel-country-code`
- `tel-national`
- `tel-area-code`
- `tel-local`
- `tel-local-prefix`
- `tel-local-suffix`
- `tel-extension`

### Credit cards

```html
<label for="frmNameCC">Name on card</label>
<input
  name="ccname"
  id="frmNameCC"
  required
  placeholder="Full Name"
  autocomplete="cc-name"
/>

<label for="frmCCNum">Card Number</label>
<input name="cardnumber" id="frmCCNum" required autocomplete="cc-number" />

<label for="frmCCCVC">CVC</label>
<input name="cvc" id="frmCCCVC" required autocomplete="cc-csc" />

<label for="frmCCExp">Expiry</label>
<input
  name="cc-exp"
  id="frmCCExp"
  required
  placeholder="MM-YYYY"
  autocomplete="cc-exp"
/>
```

### Sections

The final feature of the new autocomplete attribute tokens is the ability to declare an arbitrary section to group fields.

A section is defined using a token that starts with `section-`. What comes after the dash is up to you. The specification provides this example of sections:

```html
<fieldset>
  <legend>Ship the blue gift to...</legend>
  <label>
    Address:
    <input name="bc" autocomplete="section-blue shipping street-address" />
  </label>
  <label>
    City:
    <input name="bc" autocomplete="section-blue shipping address-level2" />
  </label>
  <label>
    Postal Code:
    <input name="bp" autocomplete="section-blue shipping postal-code" />
  </label>
</fieldset>

<fieldset>
  <legend>Ship the red gift to...</legend>
  <label>
    Address:
    <input name="ra" autocomplete="section-red shipping street-address" />
  </label>
  <label>
    City:
    <input name="rc" autocomplete="section-red shipping address-level2" />
  </label>
  <label>
    Postal Code:
    <input name="rp" autocomplete="section-red shipping postal-code" />
  </label>
</fieldset>
```

### All the tokens

If you’re using the autofill tokens, the order is:

```html
[section-](optional) [shipping|billing](optional)
[home|work|mobile|fax|pager](optional) [autofill field name]
```

The longest possible set autofill token might look something like this:

```html
<label for="foo">Mobile phone for delivery</label>
<input
  type="text"
  name="foo"
  id="foo"
  autocomplete="section-red shipping mobile tel"
/>
```

### Demo

<iframe height="265" style="width: 100%;" scrolling="no" title="Cross Browser Autofill Form — Selected Fields" src="https://codepen.io/grigs/embed/YqoyWv?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/grigs/pen/YqoyWv'>Cross Browser Autofill Form — Selected Fields</a> by Jason Grigsby
  (<a href='https://codepen.io/grigs'>@grigs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Useful links

- https://cloudfour.com/thinks/autofill-what-web-devs-should-know-but-dont/
- https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
