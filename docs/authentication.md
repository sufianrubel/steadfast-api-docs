---
title: Authentication
description: Learn how to authenticate requests to the Steadfast Courier REST API using Api-Key and Secret-Key.
sidebar_position: 2
slug: /authentication
---

# Authentication

All Steadfast Courier API requests require authentication using an **API Key** and **Secret Key**. These credentials must be included in the HTTP request headers.

---

## Base URL

```text
https://portal.packzy.com/api/v1
```

---

## Required Headers

| Header | Required | Description |
|---------|----------|-------------|
| Api-Key | ✅ Yes | Your Steadfast API Key |
| Secret-Key | ✅ Yes | Your Steadfast Secret Key |
| Content-Type | ✅ Yes | `application/json` |

---

## Example HTTP Headers

```http
POST /api/v1/create_order HTTP/1.1
Host: portal.packzy.com
Api-Key: YOUR_API_KEY
Secret-Key: YOUR_SECRET_KEY
Content-Type: application/json
```

---

## cURL Example

```bash
curl --request POST \
  --url https://portal.packzy.com/api/v1/create_order \
  --header "Api-Key: YOUR_API_KEY" \
  --header "Secret-Key: YOUR_SECRET_KEY" \
  --header "Content-Type: application/json"
```

---

## Authentication Errors

| HTTP Status | Description |
|-------------|-------------|
| 401 | Invalid API Key or Secret Key |
| 403 | Access denied |
| 415 | Unsupported Content-Type |

---

## Best Practices

- Keep your API credentials secure.
- Never expose API keys in frontend or mobile applications.
- Store credentials in environment variables.
- Always use HTTPS when making API requests.
- Rotate API credentials if they are compromised.

---

## Related Guides

- Quick Start
- Create Order API
- Bulk Order API