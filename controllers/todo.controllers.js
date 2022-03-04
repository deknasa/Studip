const fs = require('fs')

exports.getTodo = (req, res) => {
    fs.readFile('./data/data.json', (err, data) => {
        res.json(JSON.parse(data))
    })
}

exports.postTodo = (req, res) => {
    const body = req.body;
    fs.writeFile('./data/data.json', JSON.stringify(body), (err) => {
        if(err) {
            console.log(err)
            res.status(400).json({message: 'ERROR'})
            return
        }
        res.json(body)
    })
}

exports.deleteTodo = (req, res) => {
    const id = req.params.id
    console.log(id);
    res.send("Success")
}


// exports.getCities = (req, res) => {
//     console.log(id);
// }