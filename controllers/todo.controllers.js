const fs = require('fs')
const db = require('../config/db')

exports.getTodo = async (req, res) => {
    await db.query("Select * from todos").then(result => {
        res.status(200).json({
            "data": result.rows
        })
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })
    // fs.readFile('./data/data.json', (err, data) => {
    //     res.json(JSON.parse(data))
    // })
}

exports.postTodo = async (req, res) => {
    const body = req.body;

    await db.query(`insert into todos (title,checked) values ('${body.title}', ${body.checked})`)
    .then(result => {
        res.status(200).json({
            "status": "sukses"
        })
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })

    // fs.writeFile('./data/data.json', JSON.stringify(body), (err) => {
    //     if(err) {
    //         console.log(err)
    //         res.status(400).json({message: 'ERROR'})
    //         return
    //     }
    //     res.json(body)
    // })
}

exports.updateTodo =async (req, res) => {
    const body = req.body;
    const id = req.query.id;

    await db.query(`update todos set title='${body.title}', checked = ${body.checked} where id=${id}`)
    .then(result => {
        res.status(200).json({
            "status": "sukses"
        })
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })
}

exports.deleteTodo = async (req, res) => {
    const id = req.query.id

    await db.query(`delete from todos where id = ${id}`)
    .then(result => {
        res.status(200).json({
            "status": "Delete Success"
        })
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({
            message: 'INTERNAL SERVER ERROR'
        })
    })

    // const id = req.params.id
    // console.log(id);
    // res.send("Success")
}


// exports.getCities = (req, res) => {
//     console.log(id);
// }