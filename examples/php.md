<?php

$payload = [
    "invoice" => "INV-1001",
    "recipient_name" => "John Smith",
    "recipient_phone" => "01711111111",
    "recipient_address" => "House 17, Road 3/A, Dhaka",
    "cod_amount" => 1060,
    "note" => "Deliver before 3 PM",
    "item_description" => "T-Shirt",
    "total_lot" => 1,
    "delivery_type" => 0
];

$ch = curl_init("https://portal.packzy.com/api/v1/create_order");

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "Api-Key: YOUR_API_KEY",
        "Secret-Key: YOUR_SECRET_KEY",
        "Content-Type: application/json"
    ],
    CURLOPT_POSTFIELDS => json_encode($payload)
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo curl_error($ch);
} else {
    echo $response;
}

curl_close($ch);