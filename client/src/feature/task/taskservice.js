import axios from "axios"
const   BaseUrl='https://workspace-p7ko.onrender.com'


const createtask= async(token,formData)=>{
const data=formData.formData
console.log(formData)
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.post(`${BaseUrl}/api/projects/${formData.projectId}/tasks?assignedTo=${formData.assignedTo}`,data,
    options
  );
console.log(response.data)
  return response.data;
}






const getsingletask= async(token,id)=>{
// const data=formData.formData
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.get(
    `${BaseUrl}/api/project/tasks/${id}`,
    options
  );


  return response.data;
}

const getalltask= async(token)=>{

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.get(
    `${BaseUrl}/api/task/alltask`,
    options
  );
console.log(response.data)

  return response.data;
}







const taskupdate= async(token,formData)=>{
const data=formData.formData
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.put(
    `${BaseUrl}/api/projects/task/${formData._id}`,data,
    options
  );
// console.log(response.data)

  return response.data;
}

const taskdelete= async(token,id)=>{
// const data=formData.formData
console.log(id)
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.delete(
    `${BaseUrl}/api/projects/task/${id}`,
    options
  );
console.log(response.data)

  return response.data;
}


const taskservice= {createtask,getsingletask,getalltask,taskupdate,taskdelete}
export default taskservice