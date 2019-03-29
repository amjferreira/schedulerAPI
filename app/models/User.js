const sequelize = require('../config/db')
const Sequelize = require('sequelize')
const Calendar = require('./Calendar')

const User = sequelize.define('user', {

    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    }
}, { timestamps: false })


User.hasMany(Calendar, {as: 'calendars', foreignKey: 'userId' })


module.exports = User