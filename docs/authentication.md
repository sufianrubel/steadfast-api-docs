---
title: Authenticate requests
description: Authenticate Steadfast Courier API requests with the Api-Key and Secret-Key headers.
sidebar_position: 3
slug: /authentication
---

# Authenticate requests

Send your merchant credentials as HTTP headers with every API request.

If you do not have credentials yet, [sign in to the Steadfast merchant panel](https://steadfast.com.bd/login) and follow [Get API credentials](./getting-started.md).

## Required headers

| Header | When required | Value |
| --- | --- | --- |
| `Api-Key` | Every request | Your merchant API key |
| `Secret-Key` | Every request | Your merchant secret key |
| `Content-Type` | Requests with a JSON body | `application/json` |

## Example

```bash
curl --request GET \
  --url https://portal.packzy.com/api/v1/get_balance \
  --header "Api-Key: YOUR_API_KEY" \
  --header "Secret-Key: YOUR_SECRET_KEY"
```

For the interactive API reference, select **Authorize**, enter both credentials, and then open an endpoint. Only use real credentials on a trusted device.

## Handle authentication failures

An HTTP `401` response means one or both credentials are missing or invalid.

1. Confirm that both headers are present.
2. Check for copied spaces, line breaks, or placeholder values.
3. Confirm that the credentials belong to the intended merchant account.
4. Get or rotate credentials through the [merchant panel](https://steadfast.com.bd/login) if necessary.

Do not retry a `401` response automatically; correct the credentials first.

## Security checklist

- Read credentials from environment variables or a secret manager.
- Send requests over HTTPS only.
- Keep API calls in server-side code.
- Redact credentials from logs and monitoring data.
- Rotate credentials immediately if they may have been exposed.

Next: [Create your first order](./quick-start.md).
