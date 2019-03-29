const sequelize = require('../config/db')
const Sequelize = require('sequelize')
const User = require('./User')


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


//Calendar.belongsTo(User, { as: 'UserRef', foreignKey: 'userId' });

module.exports = Calendar