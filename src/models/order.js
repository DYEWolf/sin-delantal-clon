import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    "products": [{
        type: Schema.Types.ObjectId,
        ref: 'Products',
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
        type: Boolean,
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

export default mongoose.model('Order', OrderSchema);