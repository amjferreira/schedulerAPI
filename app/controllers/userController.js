var User = require('../models/userModel.js');


const findAll = (req, res) => {

  User.findAll()
    .then(function (vals) {
      res.send(vals)
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500) 
    })
}

const findById = (req, res) => {

  User.findByPk(req.params.id).then((val) => {
    if (val != null)
    res.send(val)
    else
    res.status(404).end()
  }).catch(err => {
    console.log(err.message)
    res.sendStatus(500) 
  })
}

const deleteById = (req, res) => {

  User.destroy(
    {
      where: { id: req.params.id }
    }
  ).then(() => {
    res.send("deleted")
  }).catch(err => {
    console.log(err.message)
    res.sendStatus(500) 
  })
}


const insert = (req, res) => {

  let user = {firstname, lastname, email} = req.body
  User.create(user).then(() => {

    //add header map with the resource ID
    res.sendStatus(201)
  }).catch(err => {
    console.log(err.message)
    res.sendStatus(500) 
  })

}


const patch = (req,res) => {

  let user = {} 

  for(b in req.body){

    user[b] = req.body[b]
  }
  console.log("\nuser is: \n",user)

  User.update(user,{ where :{id: req.params.id}})
  .then(() => {
    res.sendStatus(200)
  }).catch(err => {
    console.log(err.message)
    res.sendStatus(500) 
  })
}


module.exports = { findAll, findById, deleteById, insert, patch }