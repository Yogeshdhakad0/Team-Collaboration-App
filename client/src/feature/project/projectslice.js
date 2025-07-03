import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectservice from "./projectservice";


const projectslice=createSlice({
    name:"project",
    initialState:{
       projects:[],
       singleiprojects:[],
        isLoading:false,
        isError:false,
        isSuccess:false,
        issuccess:false,//  ye mene login page ko  navgite  to home page
         Message:''

    },
    extraReducers:(builder)=>{
        builder
.addCase(CreateProject.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(CreateProject.fulfilled,(state,action)=>{
    console.log(action.payload)
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        state.singleiprojects = [...state.singleiprojects,action.payload]
        // state.projects = action.payload;
})  
.addCase(CreateProject.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 






.addCase(GetProject.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(GetProject.fulfilled,(state,action)=>{
    console.log('bjhjb',action.payload)
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        state.projects=action.payload
        // state.projects = [action.payload, ...state.projects];
      
})  
.addCase(GetProject.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 










.addCase(GetSingleiProject.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(GetSingleiProject.fulfilled,(state,action)=>{
 
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
      
        // state.projects = [action.payload, ...state.projects];
        state.singleiprojects = action.payload;
})  
.addCase(GetSingleiProject.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 





    },
})


export default projectslice.reducer;










export const CreateProject = createAsyncThunk('CREATES/PROJECT', async (formdata, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token

//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await projectservice.createprojects(token ,formdata);

console.log(data)
    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});




export const GetSingleiProject = createAsyncThunk('GETALL/PROJECTs', async (id, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token

//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await projectservice.getsingleiproject(token ,id);

  
    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});



export const GetProject = createAsyncThunk('GETALL/PROJECT', async (_, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token

//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await projectservice.getproject(token);


    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});


export const GmailSendCreaet = createAsyncThunk('GMAIL/SEND', async (formData, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token

//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await projectservice.sandemail(token,formData);
    return  data
  } catch (error) {
    console.log("Error in gmailcreate thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});
