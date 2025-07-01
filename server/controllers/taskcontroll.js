const expressAsyncHandler = require("express-async-handler");
const projectmodel = require("../models/projectmodel");
const taskmodel = require("../models/taskmodel");

const createTask =expressAsyncHandler(async (req, res) => {
  // 🧠 Route Params se project ID lo
  const { projectId } = req.params;

  // 🧠 Query se assignedTo (member ID) lo
  const assignedTo = req.query.assignedTo;

  // 🧠 Body se baaki details lo
  const { taskname, priority, dueDate } = req.body;

  // 🔒 Validate: assignedTo diya gaya hai ya nahi
  if (!assignedTo) {
    return res.status(400).json({ message: "assignedTo (member id) is required in query." });
  }


  const task = await taskmodel.create({
    taskname,
    priority,
    dueDate,
    assignedTo,
    projectId,
    createdBy: req.user._id
  });

  res.status(201).json(task);
});



const getalltaks = expressAsyncHandler(async (req, res) => {

  const gettask = await taskmodel.find(); 
  if (!gettask || gettask.length === 0) {
    res.status(404);
    throw new Error('No tasks found');
  }
  res.status(200).json(gettask); 
});


// const getalltasks = expressAsyncHandler(async (req, res) => {
//   console.log('Fetching all tasks...');
  
//   const tasks = await taskmodel.find();

//   if (!tasks || tasks.length === 0) {
//     res.status(404).json({ message: 'No tasks found' });
//     return; // 👈 stop execution here
//   }

//   res.status(200).json(tasks);
// });


const getsingletask = expressAsyncHandler(async (req, res) => {
  
  const {id}=req.params
  const gettask = await taskmodel.find({projectId:id}); 
  if (!gettask || gettask.length === 0) {
    res.status(404);
    throw new Error('No tasks found');
  }

  res.status(200).json(gettask); 
});


const taskupdate = expressAsyncHandler(async (req, res) => {
  const { taskname, priority, dueDate, status } = req.body;

  const updatedTask = await taskmodel.findByIdAndUpdate(
    req.params.id, 
    {
      taskname,
      priority,
      dueDate,
      status,
    },
    { new: true }   
  );

  if (!updatedTask) {
    res.status(404);
    throw new Error("Task not found");
  }

  res.status(200).json(updatedTask);
});



const taskdelete = expressAsyncHandler(async (req, res) => {
  const deletedTask = await taskmodel.findByIdAndDelete(req.params.id);

  if (!deletedTask) {
    res.status(404);
    throw new Error("Task not found");
  }

  res.status(200).json({
    _id:deletedTask._id,
    message: "Task deleted successfully",
   
  });
});


const PDFDocument = require('pdfkit');

const exportTaskPDF = async (req, res) => {
  const doc = new PDFDocument();
  const filename = `Tasks_${Date.now()}.pdf`;

  // Set response headers
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  res.setHeader('Content-Type', 'application/pdf');

  doc.pipe(res);

  doc.fontSize(18).text('📄 Project Task List', { align: 'center' });
  doc.moveDown();

  // Get tasks (you can filter by project id also)
  const tasks = await taskmodel.find().populate('assignedTo', 'name');

  tasks.forEach((task, i) => {
    doc.fontSize(12).text(`📝 Title: ${task.taskname}`);
    doc.text(`👤 Assigned To: ${task.assignedTo?.name || 'Unassigned'}`);
    doc.text(`📅 Due Date: ${task.dueDate?.toDateString() || 'N/A'}`);
    doc.text(`📌 Status: ${task.status}`);
    doc.moveDown();
  });

  doc.end();
};



 module.exports={createTask,getalltaks, getsingletask,taskupdate,taskdelete,exportTaskPDF}