const Sequelize = require('sequelize')
let config = require('./config')


const sequelize = new Sequelize(config.database,
    config.user, config.password, { host: config.host, dialect: config.dbType })



sequelize.sync()
    .then(() =>
        console.log('database is syncronized!'))
    .catch(err =>
        console.log("there was an error", err)
    )

    /*
//making sure, its connecting properly
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been made with success!!')
    })
    .catch(err =>
        console.log('Bad connection: ', err)
    )

*/



module.exports = sequelize