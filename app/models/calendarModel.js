const Database = require('../config/db')

const database = new Database()
const findAll = database.query("SELECT * FROM users")

module.exports = findAll