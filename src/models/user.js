import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const SALT = 10;

const UserSchema = new Schema({
    "name": {
        type: String,
        require: true
    },
    "last_name": {
        type: String,
        require: true
    },
    "mail": {
        type: String,
        require: true
    },
    "birthdate": {
        type: Date,
    },
    "username": {
        type: String,
        require: true,
        unique: true
    },
    "password": {
        type: String,
        require: true
    },
    "photo": {
        type: String,
        default: "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg"
    },
    "genre": {
        type: String,
        require: true
    },
    "user_pay": {
        type: String,
    },
    "directions":{
        type: [{
            "street": String,
            "num_int": Number,
            "num_ext": Number,
            "zip": Number
        }],
        required: true
    }
}, {collection: "User", timestamps: true});

UserSchema.pre('save', function(next) {
    let user = this;
    if(!user.isModified('password')) {return next();}
    bcrypt.genSalt(SALT, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

export default mongoose.model('User', UserSchema);