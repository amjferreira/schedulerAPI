const sequelize = require('../config/db')
const Sequelize = require('sequelize')
const Event = require('./Event')

const Calendar = sequelize.define('calendar', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

Calendar.hasMany(Event, { as: 'events', foreignKey: { calendar_id: { allowNull: false } } })
module.exports = Calendar