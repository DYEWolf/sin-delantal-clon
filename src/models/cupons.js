import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CuponsSchema = new Schema({
    "cupon":{
        type: String,
        required: true
    }

}, {collection: "Cupon", timestamps: true});

export default mongoose.model('Cupon', CuponsSchema);