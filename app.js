const express = require('express')
const app = express()
const routes = require('./app/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())


//@TODO add logger

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes.user)
app.use('/api', routes.calendar)


//@TODO put port in configs
const port = 8080
app.listen(port, () => console.log(`Example app listening on port ${port}!`))