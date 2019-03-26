const sequelize = require('../config/db'),
    Sequelize = require('sequelize'),
    User = require('./User')


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

Calendar.associate = (models) => {

    Calendar.belongsTo(User)
};

module.exports = Calendar