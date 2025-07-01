import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memberservice from "./memberservice";

const setuser= JSON.parse(localStorage.getItem('user'))

const memberslice=createSlice({
    name:"member",
    initialState:{
      memberproject:[],
        isLoading:false,
        isError:false,
        isSuccess:false,
         Message:''
    },
    extraReducers:(builder)=>{
        builder
.addCase(MemberProjectGet.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(MemberProjectGet.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        state.memberproject=action.payload
})  
.addCase(MemberProjectGet.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 


// .addCase(MemberCreateComment.pending,(state,action)=>{
//           state.isLoading=true
//            state.isError=false
//            state.isSuccess=false
//  })  
//  .addCase(MemberCreateComment.fulfilled,(state,action)=>{
//         state.isLoading=false
//         state.isError=false
//         state.isSuccess=true
//         state.memberproject=action.payload
// })  
// .addCase(MemberCreateComment.rejected,(state,action)=>{
//     state.isLoading=false
//         state.isError=true
//         state.isSuccess=false
//         state.Message=action.payload
// }) 





    },
})


export default memberslice.reducer;




export const MemberProjectGet= createAsyncThunk('MEMBER/PROJECTGET', async (_, thunkAPI) => {
  try {
    //    let token =  thunkAPI.getState().auth.users.token

 const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await memberservice.memberprojectget(token);

// console.log(data)
    return  data
  } catch (error) {
    console.log("Error in MEMBER/PROJECTGET thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});

export const MemberCreateComment= createAsyncThunk('MEMBER/CREATECOMMENT', async (formdata, thunkAPI) => {
  try {
    //    let token =  thunkAPI.getState().auth.users.token

 const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found in localStorage");
    }
let data = await memberservice.createmembercomment(formdata,token);

// console.log(data)
    return  data
  } catch (error) {
    console.log("Error in MEMBER/PROJECTGET thunk:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});

