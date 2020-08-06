const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
