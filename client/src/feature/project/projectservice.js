import axios from "axios"

const createprojects= async(token,formData)=>{


  let data =formData.formData

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.post(
    `/api/project/${formData.id}`,
data,
    options
  );


  return response.data;
}



const getproject= async(token)=>{

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.get(
    `/api/project`,
    options
  );

console.log(response.data)
  return response.data;
}



const getsingleiproject= async(token,id)=>{




  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.get(
    `/api/projects/${id}`,
    options
  );

console.log(response.data)
  return response.data;
}





const sandemail= async(token,formData)=>{
console.log(formData)



  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.post(
    `/api/send-invite`,{email:formData},
    options
  );

console.log(response.data)
  return response.data;
}




const projectservice= {createprojects,getsingleiproject,getproject,sandemail}
export default projectservice