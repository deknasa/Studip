const express =  require('express')
const app = express()
const port = 3000
const locationRoutes = require('./routes/location')
const todoRoutes = require('./routes/todo')

app.use(express.json())

app.use('/todo', todoRoutes)
app.use('/location', locationRoutes)


app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})