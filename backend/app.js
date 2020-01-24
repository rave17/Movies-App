const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const exhbs = require('express-handlebars')
const moment = require('moment')
const dbSequelize = require('sequelize')

const routes = require('./routes/index')
const app = express()

const dbModel = require('../database/movieModel.js')

dbModel.sequelize.sync()

app.set('port', process.env.PORT || 3000)
app.set(bodyParser.json())
app.set('views', path.join(__dirname, '../frontend/views/'))

//handlebars
const hbs = exhbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../frontend/views/layouts'),
    partialsDir: path.join(__dirname, '../frontend/views/partials'),
    extname: '.hbs',
    helpers: moment
})



app.engine('.hbs', hbs.engine);


app.set('view engine', '.hbs')

app.use(morgan('dev'))
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'moviesdb'
}, 'single'))
app.use(bodyParser.urlencoded({extended:false}))




app.use('/', routes) 


app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'))
})
