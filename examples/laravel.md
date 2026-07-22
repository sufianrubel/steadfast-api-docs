use Illuminate\Support\Facades\Http;

$response = Http::withHeaders([
    'Api-Key' => env('STEADFAST_API_KEY'),
    'Secret-Key' => env('STEADFAST_SECRET_KEY'),
    'Content-Type' => 'application/json',
])->post('https://portal.packzy.com/api/v1/create_order', [

    'invoice' => 'INV-1001',

    'recipient_name' => 'John Smith',

    'recipient_phone' => '01711111111',

    'recipient_address' => 'House 17, Road 3/A, Dhaka',

    'cod_amount' => 1060,

    'note' => 'Deliver before 3 PM',

    'item_description' => 'T-Shirt',

    'total_lot' => 1,

    'delivery_type' => 0

]);

return $response->json();