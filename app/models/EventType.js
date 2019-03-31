const sequelize = require('../config/db')
const Sequelize = require('sequelize')


const EventType = sequelize.define('event_type', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
},{ timestamps: false });

module.exports = EventType