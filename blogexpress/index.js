//const {SSL_OP_TLS_BLOCK_PADDING_BUG} = require('constants')

const express = require('express')
const path = require('path')

var exphbs  = require('express-handlebars');

const app = express()
const port =3000

app.engine('.hbs', exphbs.engine({extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs')
//app.set("views", "./views/layouts")


//app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
    console.log(`blog server link http://localhost:${port}`)
})