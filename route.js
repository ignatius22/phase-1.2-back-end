const express = require('express')
const dataController = require('./controller')

const router = express.Router()

router.get('/rates', dataController.getCurrency);


module.exports = router;