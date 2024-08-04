import jwt from 'jsonwebtoken'
import config from '../config/config.js'

var dataToken = (user_id) => {
    return {
        'id': user_id
    }
}

const signJWT = (dataToken) => {
    // ignoreExpiration 
    return jwt.sign(dataToken, config.TOKEN_SECRET_KEY, {})
}
var verifyJWT = (token, callback) => {
    jwt.verify(token, config.TOKEN_SECRET_KEY, (err, decoded) => {
        if(err == null) {
            callback('null', decoded)
        }else if(err.name == 'TokenExpiredError') {
            callback('expired')
        }else if(err.name == 'JsonWebTokenError') {
            callback('invalid')
        }
    });
}

var newToken = (currentToken) => {
    const data = jwt.verify(currentToken, config.TOKEN_SECRET_KEY, {ignoreExpiration: true} );
    //reCreate token
    signJWT(data, (tokenCreated) => {
        callback(tokenCreated)
    })
}


export default {
    dataToken,
    signJWT,
    verifyJWT,
    newToken,
}
