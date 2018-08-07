import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TypeRestaurantSchema = new Schema({
    "name": {
        type: String,
        require: true
    },
    "description": {
        type: String,
        require: true
    }

}, {collection: "TypeRestaurant", timestamps: true});

export default mongoose.model('TypeRestaurant', TypeRestaurantSchema)