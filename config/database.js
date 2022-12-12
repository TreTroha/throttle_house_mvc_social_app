const { urlencoded } = require('express')
const mongoose = require('mongoose')
const URL = require('url')

const connectDB = async () => {
  try {
    console.log(URL.parse(process.env.DB_STRING))
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
