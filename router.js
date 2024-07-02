const express = require('express')
const { handleCreateData, handleUpdateData, handleDeleteData, handleDisplayData, handleGetDataById } = require("./crud")
const router = express.Router()

router.post('/addtasks',handleCreateData)

router.get('/displaytasks',handleDisplayData)

router.put('/updatetasks/:id',handleUpdateData)

router.delete('/deletetasks/:id',handleDeleteData)

router.get('/gettaskbyid/:id',handleGetDataById)

module.exports = router;