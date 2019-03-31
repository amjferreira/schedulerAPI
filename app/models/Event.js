const sequelize = require('../config/db')
const Sequelize = require('sequelize')
const EventType = require('./EventType')

const Event = sequelize.define('event', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    type_id: {
        type: Sequelize.INTEGER,
        references: {
            model: EventType,
            key: 'id'
        }
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    local: {
        type: Sequelize.STRING,
        allowNull: true

    }
});


module.exports = Event