const {  mongoose } = require("mongoose")


const DBconntion= async()=>{
    try {
      
        const connt = await mongoose.connect(process.env.MONGO_URL)
       
        console.log(`success full connect database ${connt.connection.name}`)
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=DBconntion