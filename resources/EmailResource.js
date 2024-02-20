const express = require('express')
const { sendEmail } = require('../controllers/EmailController')

const router = express.Router()

router.post('/' , sendEmail)

module.exports = router