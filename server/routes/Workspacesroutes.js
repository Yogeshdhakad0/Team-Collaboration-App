const express = require('express');
const { memberadd,getmember ,createWorkspace,getWorkspaces, alluser} = require('../controllers/workspacescontroll');
const { protect } = require('../Middlewares/Middlewaretoken');


 const router= express.Router()
  

 router.post('/workspaces/member',protect, memberadd)
 router.get('/workspaces/members',protect, getmember)
 router.post('/workspaces/:id',protect,createWorkspace)
 router.get('/workspaces',protect,getWorkspaces)
 router.get('/alluser',protect,alluser)


 module.exports=router