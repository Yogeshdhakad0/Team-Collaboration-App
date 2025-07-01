const express = require('express');


const { protect } = require('../Middlewares/middlewaretoken');
const { createproject ,getproject, getsingliproject} = require('../controllers/projectcontroll');
 const router= express.Router()
  
 router.post('/project/:workid',protect,createproject)



 router.get('/project',protect,getproject)
 router.get('/projects/:id',protect,getsingliproject)




 module.exports=router