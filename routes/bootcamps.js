const express = require('express')
const router = express.Router()

const { getBootcapms, getBootcapm, createBootcapm, updateBootcapm, deleteBootcapm } = require('../controllers/bootcamps')

router
    .route('/')
    .get(getBootcapms)
    .post(createBootcapm)

router.route('/:id')
    .get(getBootcapm)
    .put(updateBootcapm)
    .delete(deleteBootcapm)


module.exports = router