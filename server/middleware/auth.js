const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers["x-acess-token"];

    if (!token){
        return res.render('login');

    }
    try {
        const decoded = jwt.verify(token,config.TOKEN_KEY);
        req.user = decoded;
    } catch(err){
        return res.status(401).send({message: "invalid Token"})
    }
    return next();
}

module.exports = verifyToken;