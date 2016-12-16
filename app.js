'use strict'

const express = require('express')
const port = process.env.PORT || 3001
const http = require('http')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/public'))


let server = http.createServer(app).listen(port, () => {
  console.log('Estamos en el ' + port)
})


app.all('*', (request, response, next) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
