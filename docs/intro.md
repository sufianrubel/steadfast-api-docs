---
title: Welcome
description: Build courier and delivery workflows with the Steadfast Courier REST API.
sidebar_position: 1
slug: /
---

# Steadfast Courier API

The Steadfast Courier REST API lets merchant applications create consignments, track parcel delivery, request returns, and review payments through a predictable JSON interface.

## Start here

1. Get your \`Api-Key\` and \`Secret-Key\` from the Steadfast merchant panel.
2. Review [authentication](./authentication.md) and keep both credentials on your server.
3. Follow the [quick start](./quick-start.md) to create your first order.
4. Use the [interactive API Explorer](/api-explorer) to inspect schemas and test a request.

:::tip Production base URL
\`https://portal.packzy.com/api/v1\`
:::

## Core workflows

| Workflow | What you can do |
| --- | --- |
| Orders | Create one consignment or submit multiple orders together |
| Tracking | Check status by invoice, tracking code, or consignment ID |
| Returns | Submit a return request for an eligible consignment |
| Payments | Review your current balance and payment history |

All API responses use JSON. Send \`Content-Type: application/json\` for requests with a body.
