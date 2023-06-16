<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    protected $table = 'commande';

    protected $fillable = [
        'user_name',
        'order_id',
        'product_id',
        'product_name',
        'quantity',
        'address',
        'price'
    ];

    // Define relationships if needed
}