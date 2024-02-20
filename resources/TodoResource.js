const express = require('express')
const { insert, modify, getAll, getOne, remove } = require('../controllers/TodoController')

const router = express.Router()

router.post('/' ,insert)
router.patch('/:id',modify)
router.get('/' ,getAll)
router.get('/:id' , getOne)
router.delete('/:id',remove)

module.exports = router