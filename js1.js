const express = require('express')
const path = require('path');
const app = express()
const port =3000

app.use(express.static(path.join(__dirname, 'public')))
//app.use(hmw)
/*
const hmw = (req, res, next) => {
    console.log(req)
    next()
}
*/

app.get('/hello/:name', (req, res) => {
    res.send('hello world!' + req.params.name)
})

app.get('/about', (req, res) => {
    //res.send('hello about')
    //res.sendFile(path.join(__dirname, 'index.html'))
    //res.status(500)
    res.json({"chiru": 22})
})

app.listen(port, () => {
    console.log(`server link http://localhost:${port}`)
})