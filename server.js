const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const bootcapms = require('./routes/bootcamps')

dotenv.config({ path: "./config/config.env" })

const app = express()



app.use(logger)

app.use('/api/v1/bootcamps', bootcapms)



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Sercer running in ${process.env.NODE_ENV} mode on port ${PORT}`))