require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET_KEY;

function validateToken(req, res, next){
    var token = req.headers.authorization
    if(!token) {
        return res.status(403).json({ auth: false, message: 'Unauthorized User' });
    }
    token = token.split(' ')[1];
    jwt.verify(token, jwtSecret, (err, decoded)=>{
        if(err){
            return res.status(401).json({message : "Failed to authenticate token"});
        }
        req.user = decoded;
        next();
    });
}

module.exports = validateToken;