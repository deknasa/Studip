// var jwt = require('jsonwebtoken')
// var privateKey = 'helloworld'

// const verify = (req, res, next) => {
//     const token = req.headers["auth"]
//     jwt.verify(token, privateKey, (err, decoded) => {
//         if(err){
//             return res.status(401).send({
//                 err: err
//             })
//         }
//     })
//     next()
// }

// const generateToken = (payload) => {
//     const token = jwt.sign(payload, privateKey, { 
//         algorithm: 'RS256',
//         expiresIn: '1h'
//     // }
//     })
//     return token
// }

// module.exports = {
//     verify,
//     generateToken,
// }



var jwt = require('jsonwebtoken');
let privateKey = 'helloworld'

const verify = async (req, res, next) => {
    const token = req.headers["auth"]    
    jwt.verify(token, privateKey, (err, decoded)=> {
        if(err) {
            return res.status(401).send({
                err: err
            })
        }
        next();
    });
}

const generateToken = (payload) => {
    return jwt.sign(payload, privateKey, {
         algorithm: 'HS256',
         expiresIn: "1h"
    });
}
module.exports = {
    verify,
    generateToken
}