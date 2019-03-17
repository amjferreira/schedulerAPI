const Database = require('../config/db')


const database = new Database()

module.exports = {
    findAll: () => { return database.query("SELECT * FROM users")},
    findOne: (userdID) => {
        return database.query(`SELECT * FROM users where id = ${userdID}`)
    },
    delete: (userdID) => {
        return database.query(`DELETE FROM users where id = ?`, userdID)
    },
    insert: (user) => {
        //var user = { firstname: "Jules", lastname: "Vernes", email: "jvernes@fiction.com" }

        return database.query('INSERT INTO users SET ?', user)
    }
}