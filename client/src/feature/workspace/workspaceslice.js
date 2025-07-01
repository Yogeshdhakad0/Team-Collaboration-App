import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Workspacesservice from "./workspaceservice";



const workspaceslice=createSlice({
    name:"workspace",
    initialState:{
        Workspaces:[],
        Alluser:[],
        isLoading:false,
        isError:false,
        issuccess:false,
         isMessage:''
 
    },
    extraReducers:(builder)=>{
        builder
.addCase(Getallusers.pending,(state,action)=>{

          state.isLoading=true
           state.isError=false
           state.issuccess=false
 })  
 .addCase(Getallusers.fulfilled,(state,action)=>{

        state.isLoading=false
        state.isError=false
        state.issuccess=true
        state.Alluser=action.payload
})  
.addCase(Getallusers.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.issuccess=false
        state.isMessage=action.payload
}) 





.addCase(CreateWorkspace.pending,(state,action)=>{
    
          state.isLoading=true
           state.isError=false
           state.issuccess=false
 })  
 .addCase(CreateWorkspace.fulfilled,(state,action)=>{
  
        state.isLoading=false
        state.isError=false
        state.issuccess=true
        // state.Workspaces=action.payload
                state.Workspaces = [...state.Workspaces,action.payload]

})  
.addCase(CreateWorkspace.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.issuccess=false
        state.isMessage=action.payload
}) 




.addCase(GetWorkspace.pending,(state,action)=>{
 
          state.isLoading=true
           state.isError=false
           state.issuccess=false
 })  
 .addCase(GetWorkspace.fulfilled,(state,action)=>{
  
        state.isLoading=false
        state.isError=false
        state.issuccess=true
        state.Workspaces=action.payload
})  
.addCase(GetWorkspace.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.issuccess=false
        state.isMessage=action.payload
}) 





},
})


export default workspaceslice.reducer;


export const Getallusers = createAsyncThunk('GET/ALLUSER', async (_, thunkAPI) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await Workspacesservice.userall(token);

 
    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});




export const CreateWorkspace = createAsyncThunk('CREATE/WORKSPACE', async (formdata, thunkAPI) => {
  try {
//        let token =  thunkAPI.getState().auth.users.token
// console.log(token)
 const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await Workspacesservice.createworkspace(token ,formdata);


    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});

export const GetWorkspace = createAsyncThunk('GET/ALLWORKSPACE', async (_, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token
//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await Workspacesservice.getworkspace(token );


    return  data
  } catch (error) {
    console.log("Error in Getallusers thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});



