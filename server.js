const express = require('express')
const { join } = require('path')
const exphbs = require("express-handlebars")
const app = express()
const routes = require('./routes')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(routes)

app.listen(3000)