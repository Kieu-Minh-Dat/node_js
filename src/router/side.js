const express = require('express')

const router = express.Router()


const sidecontrollers = require('../app/controllers/sidecontrollers')

router.use('/search',sidecontrollers.search )

router.use('/',sidecontrollers.index )


module.exports = router