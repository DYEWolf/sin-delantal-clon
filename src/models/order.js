import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    "products": [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    "amount": {
        type: Number,
        required: true
    },
    "cupon": {
        type: Schema.Types.ObjectId,
        ref: 'Cupon',
        required: true
    },
    "status": {
        type: String,
        required: true
    },
    "payment_status": {
        type: boolean,
        required: true
    },
    "user_direction":{
        type: String,
        required: true
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    "store": {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    }

}, {collection: "Order", timestamps: true});