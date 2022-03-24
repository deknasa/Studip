const Product = require("../models/index").Product
const User = require("../models/index").User

exports.getProduct = async (req, res) => {
    Product.findAll().then(products => {
        res.status(200).send({
            status: "sukses",
            data: products
        })
    })
    .catch((e) => {
        console.log(e);
        res.status(503).send({
            status: "FAIL",
            message: "Gagal memuat produk"
        })
    })
}

exports.getProductByUserId = async (req, res) => {
    const id = req.params.id
    User.findOne({where: {id: id},
        include: {
            model: Product,
            as: 'products'
        }
    })
    .then(users => {
        res.status(200).send({
            status: "SUCCESS",
            data: users
        })
    })
    .catch(e => {
        console.log(e);
        res.status(503).send({
            status: "FAILED",
            message: "gagal memuat user"
        })
    })
}

exports.postProduct = async (req, res) => {
    const user_id = req.params.id
    const body = req.body;
    const name = body.name;
    const price = body.price;
    const quantity = body.quantity;

    return Product.create({
        name: name,
        price: price,
        quantity: quantity,
        user_id: user_id
    })
    .then(Product => {
        res.status(200).send({
            status: "SUCCESS",
            message: "Product berhasil dibuat",
            data: Product
        })
    })
    .catch(e => {
        console.log(e);
        res.status(503).send({
            status: "FAIL",
            message: "Gagal memuat Product"
        })
    })
}