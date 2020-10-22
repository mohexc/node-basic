const express = require('express')
const dotenv = require('dotenv')
const bootcapms = require('./routes/bootcamps')

dotenv.config({ path: "./config/config.env" })

const app = express()

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`)
    next()
}

app.use(logger)

app.use('/api/v1/bootcamps', bootcapms)



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Sercer running in ${process.env.NODE_ENV} mode on port ${PORT}`))