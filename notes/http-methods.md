---
title: HTTP Methods
tags:
  - networking
link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods'
created: 2020-08-12T13:30:25.000Z
modified: 2020-08-12T13:30:25.000Z
---

`HTTP` defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as `HTTP` verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.

## GET

The `GET` method requests a representation of the specified resource. Requests using `GET` should only retrieve data.

## HEAD

The `HEAD` method asks for a response identical to that of a `GET` request, but without the response body.

## POST

The `POST` method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

## PUT

The `PUT` method replaces all current representations of the target resource with the request payload.

## DELETE

The `DELETE` method deletes the specified resource.

## CONNECT

The `CONNECT` method establishes a tunnel to the server identified by the target resource.

## OPTIONS

The `OPTIONS` method is used to describe the communication options for the target resource.

## TRACE

The `TRACE` method performs a message loop-back test along the path to the target resource.

## PATCH

The `PATCH` method is used to apply partial modifications to a resource.
