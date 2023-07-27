const express = require('express')
const path = require('path')
const router = express.Router()
const blogs = require('../data/blogs')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.handlebars')) //../templates/index.html
    //res.render('home')
})

router.get('/blog', (req, res) => {
    //blogs.forEach(item => {
    //    console.log(item.title)
    //})
    //res.render('bloghome')
    res.sendFile(path.join(__dirname, '../views/bloghome.handlebars'))
})

router.get('/blog/:slug', (req, res) => {
    //console.log(req.params.slug)
    myblog = blogs.filter(e => {
        return e.slug == req.params.slug
    })
    //console.log(myblog)
    res.sendFile(path.join(__dirname, '../templates/bloghome.html'))
})

module.exports = router