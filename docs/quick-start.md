---
title: Create your first order
description: Make an authenticated request and create your first Steadfast Courier consignment.
sidebar_position: 4
slug: /quick-start
---

# Create your first order

This guide takes you from stored credentials to a created consignment.

## Before you begin

You need:

- an active Steadfast Courier merchant account;
- an `Api-Key` and `Secret-Key` from the [merchant panel](https://steadfast.com.bd/login); and
- a server-side application or terminal that can make HTTPS requests.

## 1. Send the order

Use a unique invoice reference for each order:

```bash
curl --request POST \
  --url https://portal.packzy.com/api/v1/create_order \
  --header "Api-Key: YOUR_API_KEY" \
  --header "Secret-Key: YOUR_SECRET_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "invoice": "INV-1001",
    "recipient_name": "Nadia Rahman",
    "recipient_phone": "01711111111",
    "recipient_address": "House 17, Road 3/A, Dhanmondi, Dhaka",
    "cod_amount": 1290
  }'
```

## 2. Verify the response

A successful response contains the new consignment identifiers:

```json
{
  "status": 200,
  "message": "Consignment has been created successfully.",
  "consignment": {
    "consignment_id": 1424107,
    "invoice": "INV-1001",
    "tracking_code": "15BAEB8A",
    "status": "in_review"
  }
}
```

Store `consignment_id`, `invoice`, and `tracking_code` with the order in your database. You will use them to reconcile and track the parcel.

## 3. Check delivery status

Track the order using its invoice reference:

```bash
curl --request GET \
  --url https://portal.packzy.com/api/v1/status_by_invoice/INV-1001 \
  --header "Api-Key: YOUR_API_KEY" \
  --header "Secret-Key: YOUR_SECRET_KEY"
```

You can also track by `tracking_code` or `consignment_id`. See [Track by invoice](./api/status-by-invoice.api.mdx) and [delivery statuses](./reference/delivery-statuses.md).

## Next steps

- Follow the [order lifecycle guide](./guides/order-lifecycle.md).
- Review the complete [Create an order endpoint](./api/create-order.api.mdx).
- Learn how to [handle API errors](./reference/error-codes.md).
