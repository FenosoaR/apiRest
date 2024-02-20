const express = require('express')
const { add, update } = require('../controllers/PostController')
const { getAll, getOne, remove } = require('../controllers/PostController')

const router = express.Router()

router.get('/' ,getAll)
router.post('/',add)
router.patch('/:id',update)
router.get('/:id' ,getOne)
router.delete('/:id' ,remove)

module.exports = router