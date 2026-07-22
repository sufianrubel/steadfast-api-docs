---
title: Error Codes
description: HTTP status codes returned by the Steadfast Courier REST API.
sidebar_position: 3
slug: /reference/error-codes
---

# Error Codes

The Steadfast Courier REST API uses standard HTTP status codes to indicate whether an API request was successful or failed.

---

## HTTP Status Codes

| Status Code | Status | Description |
|-------------|--------|-------------|
| **200** | OK | The request was processed successfully. |
| **201** | Created | A new resource was created successfully (if applicable). |
| **400** | Bad Request | The request is malformed or contains invalid data. |
| **401** | Unauthorized | Missing or invalid API credentials. |
| **403** | Forbidden | You do not have permission to access this resource. |
| **404** | Not Found | The requested endpoint or resource does not exist. |
| **422** | Unprocessable Entity | Request validation failed. |
| **429** | Too Many Requests | Rate limit exceeded. Retry later. |
| **500** | Internal Server Error | An unexpected server error occurred. |
| **503** | Service Unavailable | The service is temporarily unavailable. |

---

## Example Error Response

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

## Common Causes

### 400 Bad Request

- Invalid JSON payload
- Missing required fields
- Incorrect request format

---

### 401 Unauthorized

- Invalid `Api-Key`
- Invalid `Secret-Key`
- Missing authentication headers

---

### 403 Forbidden

- Access denied
- API credentials do not have permission

---

### 404 Not Found

- Incorrect endpoint URL
- Invalid Consignment ID
- Invalid Invoice ID
- Invalid Tracking Code

---

### 422 Validation Failed

Common validation errors include:

- Duplicate invoice number
- Invalid phone number
- Empty recipient name
- Negative COD amount
- Invalid delivery type

---

### 429 Too Many Requests

- Too many requests in a short period
- Retry using exponential backoff if appropriate

---

### 500 Internal Server Error

- Temporary server issue
- Retry after a short delay
- Contact Steadfast support if the problem persists

---

## Best Practices

- Validate request data before sending it.
- Always check the HTTP status code.
- Parse the response body for detailed error messages.
- Log failed requests for debugging.
- Retry only for temporary errors such as `429`, `500`, or `503`.

---

## Related Guides

- Authentication
- Create Order API
- Bulk Create Order API
- Delivery Status API