const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      db = require('./data')


const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + './../public/build'))


app.get('/api/all', (req, res) => {
      res.status(200).send(db)
})

app.get('/api/cold', (req, res) => {
      res.status(200).send(db.cold)
})

app.get('/api/cool', (req, res) => {
      res.status(200).send(db.cool)
})

app.get('/api/warm', (req, res) => {
      res.status(200).send(db.warm)
})

app.get('/api/hot', (req, res) => {
      res.status(200).send(db.hot)
})


const port = 3001
app.listen(port, console.log(`Listening on port: ${port}`))