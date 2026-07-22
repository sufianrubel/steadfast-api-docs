---
title: Quick Start
description: Get started with the Steadfast Courier REST API in just a few minutes.
sidebar_position: 1
slug: /quick-start
---

# Quick Start

This guide will help you integrate the Steadfast Courier REST API and create your first shipment in a few simple steps.

---

## Prerequisites

Before you begin, make sure you have:

- A Steadfast Courier merchant account
- An API Key
- A Secret Key
- Your store or application ready to make HTTP requests

---

## Step 1: Get API Credentials

Obtain your **API Key** and **Secret Key** from your Steadfast Courier merchant dashboard.

You'll use these credentials to authenticate every API request.

---

## Step 2: Set the Base URL

```text
https://portal.packzy.com/api/v1
```

---

## Step 3: Create Your First Order

```bash
curl --request POST \
  --url https://portal.packzy.com/api/v1/create_order \
  --header "Api-Key: YOUR_API_KEY" \
  --header "Secret-Key: YOUR_SECRET_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "invoice":"INV-1001",
    "recipient_name":"John Doe",
    "recipient_phone":"01711111111",
    "recipient_address":"Dhaka",
    "cod_amount":500
}'
```

---

## Step 4: Check Delivery Status

You can track an order using one of the following endpoints:

- `GET /status_by_invoice/{invoice}`
- `GET /status_by_trackingcode/{trackingCode}`
- `GET /status_by_cid/{consignmentId}`

Example:

```bash
curl --request GET \
  --url https://portal.packzy.com/api/v1/status_by_invoice/INV-1001 \
  --header "Api-Key: YOUR_API_KEY" \
  --header "Secret-Key: YOUR_SECRET_KEY"
```

---

## Step 5: Check Your Balance

Retrieve your current account balance:

```bash
curl --request GET \
  --url https://portal.packzy.com/api/v1/get_balance \
  --header "Api-Key: YOUR_API_KEY" \
  --header "Secret-Key: YOUR_SECRET_KEY"
```

---

## What's Next?

Continue with these guides:

- Authentication
- Create Order API
- Bulk Order API
- Delivery Status API
- Return Request API
- Payments API