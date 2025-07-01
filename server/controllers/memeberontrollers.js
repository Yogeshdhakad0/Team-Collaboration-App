

const expressAsyncHandler = require("express-async-handler");
const Task = require("../models/taskmodel");
const comment = require("../models/commentmodel");
const commentmember = require("../models/membercommentmodel");

const getallproject = expressAsyncHandler(async (req, res) => {
  const usertokenid = req.user._id;

  if (!usertokenid) {
    return res.status(401).json({ message: "Unauthorized: No user ID found" });
  }

  // Find all tasks assigned to the user and populate the projectId field
  const projectallmember = await Task.find({ assignedTo: usertokenid }).populate("projectId");



  res.status(200).json(projectallmember);
});

// const gettaskmember=expressAsyncHandler(async(req,res)=>{
//     const usertokenid = req.user._id;

//     const gettaskmember=await Task.find({assignedTo:usertokenid})
// console.log()
// })




// const gettaskmember = expressAsyncHandler(async (req, res) => {
//   const usertokenid = req.user._id;

//   if (!usertokenid) {
//     return res.status(401).json({ message: "Unauthorized: No user found" });
//   }

//   const tasks = await Task.find({ assignedTo: usertokenid })
//     .populate("projectId")
//     const   takass= tasks.map(item){
//         const conm= await Task.find({_id:item._id})    
//         const data = await comment.find({taskId:item._id})
// return connet ,data
//     }
   
//   res.status(200).json(tasks);
// });

const gettaskmember = expressAsyncHandler(async (req, res) => {
  const usertokenid = req.user._id;

  if (!usertokenid) {
    return res.status(401).json({ message: "Unauthorized: No user found" });
  }

  const tasks = await Task.find({ assignedTo: usertokenid }).populate("projectId");

  // For each task, fetch its comments
  const tasksWithComments = await Promise.all(
    tasks.map(async (task) => {
      const comments = await comment.find({ taskId: task._id })
      const member= await commentmember.find({taskId: task._id})
      return {
        ...task.toObject(), // convert Mongoose doc to plain object
        admin:comments
        ,member
      };
    })
  );

  res.status(200).json(tasksWithComments);
});


const membertaskcomment = expressAsyncHandler(async (req, res) => {
  const { membercommenttext, status,id } = req.body;
  // const { id: taskId } = req.params;

  try {
    const memberCreateComment = await commentmember.create({
      taskId: id,
      memberId: req.user.id,
      membercommenttext: membercommenttext,
      status: status,
    });

    res.status(201).json(
     
   memberCreateComment,
    );
  } catch (error) {
    res.status(400).json({
      message: "Failed to create comment",
      error: error.message,
    });
  }
});



module.exports = {
  getallproject,gettaskmember, membertaskcomment
};
