const express = require('express');

const data = require('../controllers/authcontroll');
const { createcomment,getcommenttask, getallcomment } = require('../controllers/commentcontroll');
const { userprotect } = require('../Middlewares/usermiddle');
 const router= express.Router()
  
 router.post('/project/task/:id/comment',userprotect,createcomment)
 router.get('/project/task/:id',userprotect,getcommenttask)

 router.get('/project/comment/taks',userprotect,getallcomment)

 module.exports=router