const expressAsyncHandler = require("express-async-handler");
const projectmodel = require("../models/projectmodel");
;
const mongoose = require("mongoose");
const createproject=expressAsyncHandler(async(req,res)=>{

    const {projectname,description}=req.body
    const {workid}=req.params

    if(!projectname || !description){
        res.status(400).json({msg:'please provide all fields'})
    } else{
        const project = await projectmodel.create({
            projectname,
            description,
            workspaceId: workid
        })
        res.status(201).json(project)
    }
})

const getproject=expressAsyncHandler(async(req,res)=>{
 
    const project = await projectmodel.find()
    if(!project){
        res.status(404).json({msg:'no project found'})
    }else{
        res.status(200).json(project)
    }
})






const getsingliproject = expressAsyncHandler(async (req, res) => {
  
  const { id } = req.params;

  let projects;

  // Agar "alltask" likha ho URL me to saare projects bhej do
  if (id === "alltask") {
    projects = await projectmodel.find();
  }
  // Agar id valid ObjectId ho to uske projects lao
  else if (mongoose.Types.ObjectId.isValid(id)) {
    projects = await projectmodel.find({ workspaceId: id });
  }
  // Invalid ID
  else {
    return res.status(400).json({ msg: "Invalid workspace ID" });
  }

  res.status(200).json(projects);
});










module.exports={
    createproject,getproject,getsingliproject,
}