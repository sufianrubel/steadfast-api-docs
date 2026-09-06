---
title: Errors and retries
description: Handle authentication, not-found, validation, and server failures from the Steadfast Courier API.
sidebar_position: 2
slug: /reference/error-codes
---

# Errors and retries

Check the HTTP status code before reading the JSON response body. The current API contract documents the following error classes.

| HTTP status | Meaning | Application action |
| --- | --- | --- |
| `401` | Credentials are missing or invalid | Correct the `Api-Key` or `Secret-Key`; do not retry unchanged credentials |
| `404` | No matching consignment was found | Check the identifier and stop automatic retries |
| `422` | One or more request fields failed validation | Show or log field errors, correct the payload, and submit again |
| `5xx` | A server-side failure occurred | Retry cautiously with bounded exponential backoff |

## Validation response

An endpoint may return field-level details with a `422` response:

```json
{
  "status": 422,
  "message": "Validation failed.",
  "errors": {
    "recipient_phone": [
      "The recipient phone must be 11 digits."
    ]
  }
}
```

## Error-handling sequence

1. Record the HTTP status, endpoint, invoice or consignment identifier, and response message.
2. Redact the `Api-Key`, `Secret-Key`, recipient data, and other sensitive values.
3. Correct `401`, `404`, and `422` failures instead of automatically retrying them.
4. Retry only temporary connection or `5xx` failures.
5. Limit retry attempts and surface persistent failures for operational review.

## Prevent common failures

- Use the production base URL exactly as documented.
- Send both authentication headers on every request.
- Send valid JSON and `Content-Type: application/json` when the request has a body.
- Validate required fields and formats before submission.
- Keep each order invoice unique.

See [Authenticate requests](../authentication.md), [Create your first order](../quick-start.md), and the response definitions on each [API reference](../api-reference.md) page.
