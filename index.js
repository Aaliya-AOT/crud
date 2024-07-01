const express = require('express')
const router = require('./router')
const index = express()
const port = 3000
index.use(express.json())
index.use(router);


index.listen(port, () => {
    console.log("RUnning on port 3000")
})