---
title: Frequently Asked Questions (FAQ)
description: Frequently asked questions about the Steadfast Courier REST API, including authentication, orders, tracking, payments, and returns.
sidebar_position: 99
slug: /faq
---

# Frequently Asked Questions

Find answers to the most common questions about integrating with the Steadfast Courier REST API.

---

## How do I create an order?

Use the **Create Order API** (`POST /create_order`) to create a new shipment.

Required fields include:

- Invoice
- Recipient Name
- Recipient Phone
- Recipient Address
- COD Amount

👉 See: **Create Order API**

---

## How do I create multiple orders at once?

Use the **Bulk Create Order API** (`POST /create_order/bulk-order`).

- Supports up to **500 orders** per request.
- Send the orders as a JSON array.

👉 See: **Bulk Create Order API**

---

## How do I check delivery status?

You can check shipment status using any of the following endpoints:

- `GET /status_by_invoice/{invoice}`
- `GET /status_by_trackingcode/{trackingCode}`
- `GET /status_by_cid/{consignmentId}`

👉 See: **Delivery Status API**

---

## How do I get my current balance?

Call:

```http
GET /get_balance
```

The API returns your current merchant balance.

---

## How do I create a return request?

Use:

```http
POST /create_return_request
```

You can identify a shipment using:

- Consignment ID
- Invoice
- Tracking Code

---

## What authentication headers are required?

Every request must include:

| Header | Required |
|---------|----------|
| Api-Key | ✅ |
| Secret-Key | ✅ |
| Content-Type | application/json |

👉 See: **Authentication**

---

## Is the invoice number required to be unique?

Yes.

Each shipment must have a unique invoice number.

Duplicate invoices are not accepted.

---

## What phone number format is supported?

Recipient phone numbers must contain **11 digits**.

Example:

```text
01712345678
```

---

## Can COD amount be zero?

Yes.

The `cod_amount` cannot be negative.

---

## What does `in_review` mean?

The shipment has been created successfully and is waiting for review by Steadfast.

---

## What is the tracking code?

The tracking code is generated automatically after a shipment is created and can be used to track delivery status.

---

## What is the maximum number of orders in a bulk request?

A maximum of **500 orders** can be submitted in a single Bulk Create Order request.

---

## Which programming languages are supported?

The documentation includes examples for:

- cURL
- PHP
- Laravel
- Node.js
- Python
- Postman

---

## Where can I report API issues?

If you encounter unexpected API behavior or integration issues, please contact the Steadfast Courier support team.

---

## Related Guides

- Quick Start
- Authentication
- Create Order API
- Bulk Create Order API
- Delivery Status API
- Return Request API
- Payments API
- Error Codes