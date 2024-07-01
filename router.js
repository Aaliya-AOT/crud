const express = require('express')
const { handleCreateData, handleUpdateData, handleDeleteData, handleDisplayData } = require("./crud")
const router = express.Router()

router.post('/addtasks',handleCreateData)

router.get('/displaytasks',handleDisplayData)

router.put('/updatetasks/:id',handleUpdateData)

router.delete('/deletetasks/:id',handleDeleteData)

module.exports = router;