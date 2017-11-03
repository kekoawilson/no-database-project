const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      c = require('./controllers/controllers')


const app = express()
app.use(bodyParser.json())










const port = 3001
app.listen(port, console.log(`Listening on port: ${port}`))