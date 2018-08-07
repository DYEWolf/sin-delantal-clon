import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StoresSchema = new Schema({
    "direction":{
        type: [{
            "street": String,
            "num_int": Number,
            "num_ext": Number,
            "ZIP": Number
        }],
        required: true
    },
    "name": {
        type: String,
        require: true
    },
    "mail": {
        type: String,
        require: true
    },
    "tel": {
        type: String,
        require: true
    },
    "type_store": {
        type: Schema.Types.ObjectId,
        ref: 'TypeRestaurant',
        required: true
    },
    "rating": {
        type: [{
            "comment": String,
            "stars": Number
        }],
        required: true
    },
    "open_restaurant": {
        type: Date,
        required: true
    },
    "close_restaurant":{
        type: Date,
        required: true
    },
    "description": {
        type: String,
        require: true
    },
    "logo": {
        type: String,
        default: "http://www.ghanaedudirectory.com/Images/nologo.jpg",
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "products": [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }]
}, {collection: "Store", timestamps: true});

export default mongoose.model('Store', StoresSchema)