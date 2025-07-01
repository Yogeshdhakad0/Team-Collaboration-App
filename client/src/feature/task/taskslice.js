import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import taskservice from "./taskservice";
const setuser= JSON.parse(localStorage.getItem('user'))

const taskslice=createSlice({
    name:"task",
    initialState:{
      tasks:[],
    tasksingle:[],
      edit: { task: {}, isedit: false },
        isLoading:false,
        isError:false,
        isSuccess:false,
        issuccess:false,//  ye mene login page ko  navgite  to home page
         Message:''

    },
    extraReducers:(builder)=>{
        builder
.addCase(GetSingleTask.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(GetSingleTask.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
    
        state.tasksingle=action.payload
})  
.addCase(GetSingleTask.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 



.addCase(CreateProjects.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(CreateProjects.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
    // console.log(action.payload)
        state.tasksingle= [...state.tasksingle,action.payload]
})  
.addCase(CreateProjects.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 


.addCase(GetallTask.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(GetallTask.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
    // console.log(action.payload)
        state.tasks= action.payload
})  
.addCase(GetallTask.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 




.addCase(UpdateTask.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(UpdateTask.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
    // console.log(action.payload)
      
state.tasks= state.tasks.map((item)=>item._id=== action.payload._id ? action.payload:item)
         state.edit = {task: {}, isedit: false };
})  
.addCase(UpdateTask.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 



.addCase(DeleteTask.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(DeleteTask.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
    state.tasks = state.tasks.filter((item) => item._id !== action.payload._id); 
})  
.addCase(DeleteTask.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 





    },
      reducers: {
    removetask: (state, action) => {
      return {
        ...state,
        alltodo: state.alltodo.filter((item) => item._id !== action.payload),
      };
    },

    edittask: (state, action) => {
      return {
        ...state,
        edit: { task: action.payload, isedit: true },
      };
    },
  },
})

export const { removetask, edittask } = taskslice.actions;
export default taskslice.reducer;


export const CreateProjects = createAsyncThunk('CREATES/PROJECT', async (formdata, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await taskservice.createtask(token ,formdata);


    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});



export const GetSingleTask = createAsyncThunk('GET/SINGLEs', async (id, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await taskservice.getsingletask(token,id);


    return  data
  } catch (error) {
    console.log("Error in GetSingleTask thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});



export const GetallTask = createAsyncThunk('GETALL/TASK', async (_, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    } 
let data = await taskservice.getalltask(token);


    return  data
  } catch (error) {
    console.log("Error in GetallTask thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});



export const UpdateTask= createAsyncThunk('TASK/UPDATE', async (formData, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    } 
let data = await taskservice.taskupdate(token,formData);


    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});




export const DeleteTask= createAsyncThunk('TASK/REMOVE', async (id, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    } 
let data = await taskservice.taskdelete(token,id);
    return  data
  } catch (error) {
    console.log("Error in TASK/REMOVE thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});





