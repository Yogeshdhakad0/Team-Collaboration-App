const express = require('express');

const data = require('../controllers/authcontroll');
 const router= express.Router()
  
 router.post('/register',data.registerauth)
 router.post('/logins',data.loginauth)
 router.post('/auth0/login',data.auth0login)

 module.exports=router