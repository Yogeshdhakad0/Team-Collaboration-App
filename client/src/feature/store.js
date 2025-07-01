import { configureStore } from "@reduxjs/toolkit";
import auth from './auth/authslice'
import workspace from '../feature/workspace/workspaceslice';
import project from '../feature/project/projectslice';
import task from '../feature/task/taskslice';
import comment from '../feature/comment/commentslice';
import member from '../feature/member/memberslice';
const store=configureStore({
    reducer:{auth,workspace ,project,task,comment,member}
})


export default store