import jwt from './jwt.js'
import config from '../config/config.js'

const authMiddleware = (req, res, next) => {
    let tokenHeader = req.headers[config.HederTokenKey];
    jwt.verifyJWT(tokenHeader, (err, decoded) => {
        if (decoded === undefined) {
            res.send({ status: "Come back later, it's better not to come back at all!" });
        } else {
            req.user = decoded;
            console.log(req.user)
            next();
        }
    });
};

export default authMiddleware;