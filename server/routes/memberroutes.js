const express = require('express');

  
const { userprotect } = require('../Middlewares/usermiddle');
const { getallproject, gettaskmember, membertaskcomment } = require('../controllers/memeberontrollers');
 const router= express.Router()
  
 router.get('/getallpoject',userprotect,getallproject) 
 router.get('/membertask',userprotect,gettaskmember) 
 router.post('/membettask/comment',userprotect,membertaskcomment) 


 module.exports=router