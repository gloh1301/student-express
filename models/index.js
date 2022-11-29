let { Sequelize, DataTypes } = require('sequelize')

// environment variables are stored by the computer
let env = process.env.NODE_ENV || 'development'  // sets a default if none is specified

console.log('using environment ' + env)

let configFile = require(__dirname + '/../config.json')
let config = configFile[env]

let password = process.env.DB_PASSWORD // won't be defined locally, not needed with sqlite
// will have to set the DB_PASSWORD environment variable at Azure
config.password = password

let db = {}

let sequelize = new Sequelize(config)

let studentModelCreate = require('./student') // a function defintion
let studentModel = studentModelCreate(sequelize, DataTypes)

db[studentModel.name] = studentModel

db.sequelize = sequelize // sequelize configuration
db.Sequelize = Sequelize // Sequelize library

module.exports = db