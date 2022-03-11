const express = require('express')
const app = express()
const placesRoutes = require('./routes/placesRoutes')
const cors = require('cors')

app.use(express.json())
app.use(express.static('public')) // add public folder for serving images
app.use(cors()) // allows cross origin resource sharing

// home route
app.get('/', (req, res) => {
  console.log('hi')
  res.send('hi')
})

// places routes
app.use('/places', placesRoutes)

app.listen(8080, () => {
  console.log('LISTENING ON PORT 8080')
})
