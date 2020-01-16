const express = require('express')
const router = express.Router()

const controllerApp = require('../controllers/controllerApp')

//routes
//list movies
router.get('/', controllerApp.list)
//Add & save a movie
router.get('/add', controllerApp.add)
router.post('/add', controllerApp.save)
//edit movie
router.get('/edit/:id', controllerApp.edit)
router.post('/edit/:id', controllerApp.update)
//remove movie
router.get('/delete/:id', controllerApp.remove)
//Find a movie
router.get('/find', controllerApp.findGet)
router.post('/find/:id', controllerApp.findPost)



module.exports = router

