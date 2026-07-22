---
title: Create Order API
description: Create a new courier order using the Steadfast Courier REST API.
sidebar_position: 1
slug: /orders/create-order
---

# Create Order API

Create a new courier order using the Steadfast Courier REST API.

---

## Endpoint

**Method:** `POST`

**URL:**

```text
https://portal.packzy.com/api/v1/create_order
```

---

## Authentication

Include the following headers in every request.

| Header | Required | Value |
|---------|----------|-------|
| Api-Key | ✅ Yes | Your API Key |
| Secret-Key | ✅ Yes | Your Secret Key |
| Content-Type | ✅ Yes | application/json |

---

## Request Body

| Field | Type | Required | Description |
|------|------|----------|-------------|
| invoice | string | Yes | Unique invoice number |
| recipient_name | string | Yes | Recipient full name |
| recipient_phone | string | Yes | 11-digit phone number |
| recipient_address | string | Yes | Delivery address |
| cod_amount | number | Yes | Cash on Delivery amount |
| note | string | No | Delivery instructions |
| item_description | string | No | Item description |
| total_lot | integer | No | Total item quantity |
| delivery_type | integer | No | 0 = Home Delivery, 1 = Hub Pickup |

---

## Example Request

```json
{
  "invoice": "INV-1001",
  "recipient_name": "John Doe",
  "recipient_phone": "01711111111",
  "recipient_address": "House 17, Road 3/A, Dhanmondi, Dhaka",
  "cod_amount": 500,
  "note": "Deliver before 3 PM",
  "item_description": "T-Shirt",
  "total_lot": 1,
  "delivery_type": 0
}
```

---

## cURL Example

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
    "recipient_address":"House 17, Road 3/A, Dhanmondi, Dhaka",
    "cod_amount":500
}'
```

---

## Success Response

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

---

## Error Response

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

---

## Validation Rules

- `invoice` must be unique.
- `recipient_phone` must be a valid 11-digit Bangladeshi phone number.
- `recipient_name` must not exceed 100 characters.
- `recipient_address` must not exceed 250 characters.
- `cod_amount` must be greater than or equal to `0`.

---

## Best Practices

- Generate unique invoice IDs for every order.
- Validate customer data before calling the API.
- Store the returned `tracking_code` and `consignment_id`.
- Handle HTTP errors gracefully.
- Retry only for temporary server or network failures.

---

## Related APIs

- Bulk Create Order
- Delivery Status
- Get Current Balance
- Create Return Request