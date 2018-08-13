import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    "name": {
        type: String,
        require: true
    },
    "price": {
        type: Number,
        require: true
    },
    "photo": {
        type: String,
    },
    "description": {
        type: String,
        require: true
    },
    "store": {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    "type": {
        type: Number,
        required: true
    }
}, {collection: "Products", timestamps: true});

export default mongoose.model('Products', ProductsSchema);