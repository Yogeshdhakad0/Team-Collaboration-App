const express = require('express');


const { protect } = require('../Middlewares/Middlewaretoken');
const { createTask ,taskupdate,taskdelete,exportTaskPDF, getsingletask, getalltaks} = require('../controllers/taskcontroll');
 const router= express.Router()
  
//  router.post('/project/task',protect,)
 router.post('/projects/:projectId/tasks', protect, createTask);
 
 router.get('/task/alltask', protect, getalltaks);
 
 router.get('/project/tasks/:id', protect, getsingletask);

 router.put('/projects/task/:id', protect, taskupdate);
 router.delete('/projects/task/:id', protect, taskdelete);
 router.get('/projects/task/pdf', protect, exportTaskPDF);



 module.exports=router