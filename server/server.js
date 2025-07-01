const express= require('express');
const DBconntion = require('./config/DB-contect');
const nodemailer = require("nodemailer")
const cors = require('cors');
const expressAsyncHandler = require('express-async-handler');
const { protect } = require('./Middlewares/middlewaretoken');
require('dotenv').config()

// const { path } = require('path');
const path = require('path');
const errorHandler = require('./Middlewares/errorHandler');

// const { createemail } = require('./controllers/projectcontroll');
const app = express();
app.use(cors());


const PORT=process.env.PORT|| 3000


app.get('/', (req,res)=>{
    res.json({
        msg:'welcome to CollabSpace api 2.2'
    })
})


// data base  connect  to 
DBconntion()



// ✅ Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// ✅ (optional) Parse JSON also
app.use(express.json());

const createemail=expressAsyncHandler( async (req, res) => {

  const {email} = req.body

 
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      
      auth: {
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS,
      }
    });

    await transporter.sendMail({
      from: `"My App" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "You're invited!",
      html: "<b>Join our awesome app by clicking this http://localhost:5173/dashboard</b>"
    });

    res.json({ message: "Invite sent!" });
  } catch (err) {
    console.error("Email sending failed:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});




app.use('/api/auth',require('./routes/authRoutes'))
app.use('/api',require('./routes/Workspacesroutes'))
app.use('/api',require('./routes/projectroute'))
app.use('/api',require('./routes/taskroutes'))
app.use('/api',require('./routes/commentroute'))
app.use('/api',require('./routes/memberroutes'))
 app.post('/api/send-invite',protect,createemail)

// if(process.env.NODE_ENV==="production"){
  
// const  __dirname = path.resolve();
// app.use(express.static(path.join(__dirname,"/client/dist")))

// app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,"client","dist","index.html")))

// }else{
//   const __dirname=path.resolve();
//   app.get("/",(req,res)=>{
//     res.send('team collaboration app')
//   })
// }

app.use(errorHandler);

app.listen(PORT,()=> console.log('server runing to port ',PORT))