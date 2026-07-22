# Order Workflow

```mermaid
flowchart LR

Merchant --> CreateOrder

CreateOrder --> Review

Review --> Pickup

Pickup --> Delivery

Delivery --> Payment
```