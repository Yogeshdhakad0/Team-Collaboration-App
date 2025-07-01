import axios from "axios";

const userall=async(token)=>{
   

 const options = {
            headers : {
                authorization : `Bearer ${token}`,
            }
        }
        const response = await axios.get('/api/alluser',options);
  
         return response.data
}

const createworkspace = async (token, formdata) => {

  const name =formdata.formData

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.post(
    `/api/workspaces/${formdata.id}`,
    name,
    options
  );


  return response.data;
};







const getworkspace=async(token)=>{
 

 const options = {
            headers : {
                authorization : `Bearer ${token}`,
            }
        }
        const response = await axios.get('/api/workspaces',options);
 
         return response.data
}

const Workspacesservice= {userall,createworkspace,getworkspace}
export default Workspacesservice