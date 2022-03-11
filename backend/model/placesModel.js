const e = require('express')
const fs = require('fs')

// route == /places/:id
// this function parses the json file and returns a place if it exists

const getPlaceById = (req, callback) => {
  const { id } = req.params

  fs.readFile('./data/places.json', 'utf-8', (err, data) => {
    // parse the data
    const placesData = JSON.parse(data)
    // see if passed id matches one of the ids in the places array
    const foundPlace = placesData.find((places) => places.id == id)

    if (foundPlace) {
      callback(foundPlace)
    } else {
      callback('Could Not Find Id')
    }
  })
}

module.exports = { getPlaceById }
