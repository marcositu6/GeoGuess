const express = require('express')
const router = express.Router()
const placesController = require('../controllers/placesControllers')

// route == /places/:id
// calles the placesController getPlaceById
router.get('/:id', placesController.getPlaceById)

module.exports = router
