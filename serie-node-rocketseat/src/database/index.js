const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true }) // connect with Database
mongoose.Promise = global.Promise // class of promise(mongoose)

module.exports = mongoose