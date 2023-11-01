const express = require('express')
const router = express.Router()

const users = [
    {id: 1, nama: "Dewa", email: "warasbanget76@gmail.com"},
    {id: 2, nama: "Fatur", email: "banget@gmail.com"}
]

router.get('/users', (req, res) => {
    res.json(users)
  })

  router.post('/user', (req, res) => {
    users.push(req.body)
    res.json(users)
  })

  router.put('/user/:id', (req, res) => {
    const id = req.params.id
    users.filter(user => {
        if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
        }
    })
    res.json(users)
  })

  router.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
  })    

module.exports  = router