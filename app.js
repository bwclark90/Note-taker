const html = require("./public/routes/htmlRoutes")
const api = require("./public/routes/apiRoutes")
const express = require('express')
const { join } = require('path')
const { uid } = require('uid')
const fs = require('fs')
const app = express()
const db = require('db/db')


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


api(app)
html(app)


app.listen(process.env.PORT || 3000, () => {
  console.log('server is live')
});