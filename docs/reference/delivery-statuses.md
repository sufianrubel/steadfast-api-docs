---
title: Delivery statuses
description: Interpret the delivery_status values returned by Steadfast Courier tracking endpoints.
sidebar_position: 1
slug: /reference/delivery-statuses
---

# Delivery statuses

Tracking endpoints return the latest parcel state in `delivery_status`.

| Status | Meaning |
| --- | --- |
| `in_review` | The order was created and is waiting for review. |
| `pending` | The shipment is active and not yet completed. |
| `in_transit` | The shipment is moving through the delivery network. |
| `hold` | The shipment is temporarily on hold. |
| `delivered_approval_pending` | Delivery is recorded and awaiting approval. |
| `partial_delivered_approval_pending` | Partial delivery is recorded and awaiting approval. |
| `cancelled_approval_pending` | Cancellation is recorded and awaiting approval. |
| `unknown_approval_pending` | An unclassified result is awaiting approval. Contact support if it persists. |
| `delivered` | The shipment was delivered. |
| `partial_delivered` | Part of the shipment was delivered. |
| `cancelled` | The shipment was cancelled. |
| `unknown` | The current state could not be classified. Contact support if it persists. |

:::note Status transitions

Do not assume a fixed transition sequence. Store the value returned by the API and make application decisions from the documented status itself.

:::

## Recommended handling

- Treat approval-pending values as non-final until a later status confirms the outcome.
- Treat `delivered`, `partial_delivered`, and `cancelled` as completed outcomes for normal polling.
- Continue checking active states at a reasonable interval.
- Keep unknown values visible for operational review instead of mapping them to success or failure.

See [Manage the order lifecycle](../guides/order-lifecycle.md) and the three tracking endpoints in the [API reference](../api-reference.md).
