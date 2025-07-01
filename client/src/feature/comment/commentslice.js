import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectservice from "../project/projectservice";
import commentservices from "./commentservices";

const commentslice=createSlice({
    name:"comment",
    initialState:{
       comments:[],
    
    commetall:[],
        isLoading:false,
        isError:false,
        isSuccess:false,
         Message:''

    },
    extraReducers:(builder)=>{
        builder
.addCase(CreateComment.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(CreateComment.fulfilled,(state,action)=>{
    console.log(action.payload,'sdfsfsdf')
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        state.comments = [...state.comments,action.payload]
        // state.projects = action.payload;
})  
.addCase(CreateComment.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 




.addCase(GetAllComment.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(GetAllComment.fulfilled,(state,action)=>{
    console.log(action.payload)
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        // state.comments = [...state.comments,action.payload]
        state.commetall = action.payload;
})  
.addCase(GetAllComment.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 




.addCase(GetAmdinComment.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(GetAmdinComment.fulfilled,(state,action)=>{
    console.log(action.payload)
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        // state.comments = [...state.comments,action.payload]
        state.comments = action.payload;
})  
.addCase(GetAmdinComment.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 





    },
})


export default commentslice.reducer;










export const CreateComment= createAsyncThunk('CREATE/COMMENT', async (formdata, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token

//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await commentservices.createcomment(token ,formdata);

// console.log(data)
    return  data
  } catch (error) {
    console.log("Error in CREATE/COMMENT thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});



export const GetAllComment= createAsyncThunk('GET/commtssall', async (_ ,thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token

//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await commentservices.getallcomment(token);

console.log(data)
    return  data
  } catch (error) {
    console.log("Error in GETALL/COMMENT thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});





export const GetAmdinComment= createAsyncThunk('GETALL/COMMENT', async (id, thunkAPI) => {
  try {
       let token =  thunkAPI.getState().auth.users.token

//  const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await commentservices.getadmincomment(token ,id);

console.log(data)
    return  data
  } catch (error) {
    console.log("Error in GETALL/amdin thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});








