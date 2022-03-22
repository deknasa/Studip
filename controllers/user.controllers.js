const User = require("../models/index").User

exports.getUser = async (req, res) => {
    User.findAll().then(users => {
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