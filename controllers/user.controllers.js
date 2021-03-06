const User = require("../models/index").User
const bcrypt = require('bcrypt')
const generateToken  = require('../middleware/auth').generateToken

exports.getUser = async (req, res) => {
    return User.findAll().then(users => {
        res.status(200).send({
            status: "SUCCESS",
            data: users
        })
    })
    .catch(e => {
        console.log(e);
        res.status(503).send({
            status: "FAIL",
            message: "Gagal memuat users"
        })
    })
}

exports.postUser = async (req, res) => {
    const body = req.body;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;

    return User.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
    .then(user => {
        res.status(200).send({
            status: "SUCCESS",
            message: "User berhasil dibuat",
            data: user
        })
    })
    .catch(e => {
        console.log(e);
        res.status(503).send({
            status: "FAIL",
            message: "Gagal memuat users"
        })
    })
}

exports.signUp = async(req, res) => {
    const body = req.body;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const password = body.password;

    return User.findOne({
        where: {
            email: email,
        },
    }).then((user) => {
        if (user) {
            return res.status(400).send({
                message: "Email already Exist",
            });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        return User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash,
            })
            .then((user) => {
                const token = generateToken({
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                });
                res.status(200).send({
                    status: "SUKSES",
                    message: "SUCCES ADD USER",
                    token: token,
                });
            })
            .catch((e) => {
                console.log(e);
                res.status(500).send({
                    status: "FAIL",
                    message: "Gagal memuat users"
                })
            });
        
    })
    .catch((e) => {
        console.log(e);
        res.status(503).send({
            status: "FAIL",
            message: "Gagal memuat users"
        })
    })
};

exports.signIn = async(req, res) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;

    return User.findOne({
            where: {
                email: email,
            },
        })
        .then((user) => {
            if (!user) {
                return res.status(400).send({
                    message: "Email Not Found please Sign UP",
                });
            }

            const isValid = bcrypt.compareSync(password, user.password)
            if (!isValid) {
                return res.status(403).send({
                    message: "email and password not match",
                });
            }
            const token = generateToken({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
            });
            res.status(200).send({
                status: "SUKSES",
                token: token,
            });
        })
        .catch((e) => {
            console.log(e);
            res.status(503).send({
                status: "FAIL",
                message: "Gagal memuat users"
            })
        });
};


