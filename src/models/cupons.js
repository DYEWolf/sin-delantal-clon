import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CuponsSchema = new Schema({
    "cupon":{
        type: String,
        required: true
    },
    "discount": {
        type: Number,
        require: true
    },
    "description": {
        type: String,
        require: true
    }
}, {collection: "Cupon", timestamps: true});

export default mongoose.model('Cupon', CuponsSchema);