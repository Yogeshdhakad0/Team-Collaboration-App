const expressAsyncHandler = require("express-async-handler");

const member = require("../models/membermodel");
const Workspace = require("../models/workspacesmodel");
const User = require("../models/authmodel");

const memberadd = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;

  // Token middleware (protect) lagao, taki req.user._id mile
  const workspace = await member.create({
    name,
    owner: req.user._id, // token se user ki ObjectId yaha set ho rahi hai
    // status default se "invited" ho jayega
  });

  res.status(201).json(workspace);
});

// ✅ Get All Members Controller
const getmember = expressAsyncHandler(async (req, res) => {
  const allmember = await member.find(); // ✅ await lagao

  if (!allmember || allmember.length === 0) {
    res.status(404);
    throw new Error("No members found");
  } else {
    
    res.status(200).json(allmember);
  }
});

const createWorkspace = expressAsyncHandler(async (req, res) => {


  console.log(req.body)
  const { name } = req.body;
  
  const { id: memberId } = req.params; // URL se memberId

  // req.user._id token middleware (protect) se milta hai
  const workspace = await Workspace.create({
    name,
    owner: req.user._id,           // user token se
    members: [memberId]            // ek member add karte hue
  });

  res.status(201).json(workspace); // poora object return karo
});


const getWorkspaces = expressAsyncHandler(async (req, res) => {
 

  const workspaces = await Workspace.find()

  res.status(200).json(workspaces);
});

const alluser = expressAsyncHandler(async (req, res) => {
 

  const workspaces = await User.find()

  res.status(200).json(workspaces);
});








module.exports={memberadd ,getmember,createWorkspace,getWorkspaces,alluser}