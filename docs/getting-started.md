---
title: Getting started
description: Understand the Steadfast API basics before making your first request.
sidebar_position: 2
---

# Getting started

Steadfast exposes a versioned REST API over HTTPS. You can call it from any server-side language or framework that supports HTTP requests.

## Before you begin

You need an active Steadfast Courier merchant account and API credentials from your merchant panel. Never place the secret key in browser code, mobile apps, public repositories, or logs.

## Request format

Every authenticated request includes both credential headers:

\`\`\`http
Api-Key: YOUR_API_KEY
Secret-Key: YOUR_SECRET_KEY
Content-Type: application/json
\`\`\`

## Response handling

Use the HTTP status code first, then inspect the JSON response body:

- \`200\` — the request completed successfully
- \`401\` — credentials are missing or invalid
- \`404\` — the requested resource was not found
- \`422\` — request data failed validation
- \`500\` — a temporary server-side error occurred

Store the returned \`consignment_id\` and \`tracking_code\` after creating an order. You can use either identifier to reconcile later status updates.

## Next step

Continue to the [quick start](./quick-start.md) or open the [API Explorer](/api-explorer).
