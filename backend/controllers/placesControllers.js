const { response } = require('express')
const placesModel = require('../model/placesModel.js')

// route == /places:id
// this calls the getPaceById model which returns the data that we send to the client
const getPlaceById = (req, res) => {
  placesModel.getPlaceById(req, (responseData) => {
    res.json(responseData)
  })
}

module.exports = {
  getPlaceById,
}
