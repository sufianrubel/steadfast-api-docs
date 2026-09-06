---
title: Get API credentials
description: Get the Api-Key and Secret-Key required to call the Steadfast Courier REST API.
sidebar_position: 2
slug: /getting-started
---

# Get API credentials

Every API request requires credentials associated with an active Steadfast Courier merchant account.

## 1. Sign in to the merchant panel

Open the [Steadfast merchant panel](https://steadfast.com.bd/login) and sign in to your merchant account.

## 2. Get both credentials

In the merchant panel, locate your API credentials and copy both values:

- `Api-Key`
- `Secret-Key`

Use the header names exactly as shown throughout this documentation for consistency. Replace the placeholder values in code samples with your own credentials.

:::warning Keep the Secret-Key private

Use these credentials only in trusted server-side code. Never include them in browser JavaScript, mobile application bundles, public repositories, screenshots, support messages, or application logs.

:::

## 3. Store credentials securely

Store the values in environment variables or your deployment platform's secret manager:

```dotenv
STEADFAST_API_KEY=your_api_key
STEADFAST_SECRET_KEY=your_secret_key
```

Do not commit a populated `.env` file to source control.

## 4. Continue the integration

Next, [configure authentication](./authentication.md), then [create your first order](./quick-start.md).
