const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
        FullName: {
            type: String,
            required: true,
        },
        UserEmail: {
            type: String,
            required: true,
        },
        Role: {
            type: String,
        },
        Password: {
            type: String,
            required: true,
        },
    }, { timestamps: true });

userSchema.methods.generateToken = async function (){
    try{
        return jwt.sign({
            UserId: this._id.toString(),
            UserEmail: this.UserEmail,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn : "1h",
            }
        )
    }catch(error){
        console.error(error);
    }
};


module.exports = mongoose.model('User', userSchema);
