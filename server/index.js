const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      c = require('./controllers/controllers')
      db = require('./data')

const app = express()
app.use(bodyParser.json())
// app.use(cors)

app.use(express.static(__dirname + './../public/build'))


app.get('/api/all', (req,res) => {
      res.status(200).send(db)
})








const port = 3001
app.listen(port, console.log(`Listening on port: ${port}`))