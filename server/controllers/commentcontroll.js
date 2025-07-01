const expressAsyncHandler = require("express-async-handler");
const comment = require("../models/commentmodel");
const commentmember = require("../models/membercommentmodel");



const createcomment = expressAsyncHandler(async (req, res) => {
  const { commenttext } = req.body;

  const { id } = req.params;
  console.log(id)

  if (!commenttext) {
    res.status(400);
    throw new Error("Please fill in all details");
  }

  const newcomment = await comment.create({
    commenttext,
    userId: req.user._id, // token se aayi user ki ID
    taskId:id             // URL param se task ID
  });

  res.status(201).json(newcomment);
});





const getcommenttask = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  // find comments by taskId
  const adminComments = await comment.find({ taskId: id });
  const memberComments = await commentmember.find({ taskId: id });

  res.status(200).json({
    taskId: id,
    adminComments,
    memberComments
  });
});


// const getallcomment = expressAsyncHandler(async (req, res) => {

//   // `taskId` ke basis pe saare comments fetch karna
//   const admincomment = await comment.find();
//   const membercomment = await commentmember.find();

//   if (!commetget || commetget.length === 0) {
//     res.status(400);
//     throw new Error('No comments found for this task');
//   }

//   res.status(200).json(commetget);
// });



// const getallcomment = expressAsyncHandler(async (req, res) => {
//   // Saare admin aur member comments lao
//   const adminComments = await comment.find();
//   const memberComments = await commentmember.find();


//   const allComments = [{'admin': ...adminComments}, member:...memberComments];

//   if (!allComments || allComments.length === 0) {
//     res.status(400);
//     throw new Error('No comments found');
//   }

//   res.status(200).json(allComments);
// });





const getallcomment = expressAsyncHandler(async (req, res) => {
  // Saare admin aur member comments lao
  const adminComments = await comment.find();
  const memberComments = await commentmember.find();

  const allComments = {
    admin: adminComments,
    member: memberComments
  };

  if ((!adminComments || adminComments.length === 0) && 
      (!memberComments || memberComments.length === 0)) {
    res.status(400);
    throw new Error('No comments found');
  }

  res.status(200).json(allComments);
});





module.exports={createcomment,getcommenttask,getallcomment}