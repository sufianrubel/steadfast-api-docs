import requests

url = "https://portal.packzy.com/api/v1/create_order"

headers = {

    "Api-Key": "YOUR_API_KEY",

    "Secret-Key": "YOUR_SECRET_KEY",

    "Content-Type": "application/json"

}

payload = {

    "invoice": "INV-1001",

    "recipient_name": "John Smith",

    "recipient_phone": "01711111111",

    "recipient_address": "House 17, Road 3/A, Dhaka",

    "cod_amount": 1060,

    "note": "Deliver before 3 PM",

    "item_description": "T-Shirt",

    "total_lot": 1,

    "delivery_type": 0

}

response = requests.post(url, json=payload, headers=headers)

print(response.json())