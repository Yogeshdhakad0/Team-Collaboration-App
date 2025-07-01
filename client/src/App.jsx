
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import WorkspaceView from './pages/WorkspaceView';
import ProjectView from './pages/ProjectView';
import Login from './pages/Login';
import { WorkspaceProvider } from './contexts/WorkspaceContext';
import RegisterForm from './pages/RegisterForm';
import CreateWorkspaceModal from './components/CreateWorkspaceModal';
import WorkspaceCard from './components/WorkspaceCard';
import WorkspcesAll from './pages/WorkspcesAll';
import ProjectAll from './pages/ProjectAll';
import AllMember from './pages/AllMembers';
import AllMembers from './pages/AllMembers';
import ALLTask from './pages/ALLTask';
import CommentView from './pages/CommentView';
import CommentAll from './pages/CommentAll';
import AuthComponent from './components/AuthComponent';
import Member from './pages/Member';
import PagenotFound from './pages/PagenotFound';
import Privatecomponent from './components/Privatecomponent';
import Privatemember from './components/Privatemember';
// import AllMember from './pages/Allmember';



function App() {

  // const loaction= useLocation()
  return (
    <Router>
     
        <WorkspaceProvider>
          <div className="min-h-screen bg-gray-50">

      <AuthComponent />


            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<PagenotFound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterForm />} />

           <Route path='/user' element={<Privatemember/>}>
              <Route path="member" element={<Member />} />

               </Route>





          <Route path="/admin" element={<Privatecomponent/>}>

              <Route path="dashboard" element={<Dashboard />} />
      
              <Route path="workspaces/:id" element={<CreateWorkspaceModal />} />
              <Route path="workspaces" element={<WorkspcesAll/>} />
              <Route path="workspace/:id" element={<WorkspaceView />} />
              
              <Route path="project/:id" element={<ProjectView />} />
              <Route path="project" element={<ProjectAll />} />
              <Route path="allmembers" element={<AllMembers/>} />
              <Route path="projects/task" element={<ALLTask/>} />
              <Route path="project/task/commnet/:id" element={<CommentView/>} />
              <Route path="project/task/commnet" element={<CommentAll/>} />
             </Route>
            </Routes>
          </div>
        </WorkspaceProvider>
    
    </Router>
  );
}

export default App;