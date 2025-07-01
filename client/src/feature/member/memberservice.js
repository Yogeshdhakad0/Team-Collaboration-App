import axios from "axios";

const  memberprojectget= async(token)=>{
  console.log(token)
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.get(
    `/api/membertask`,
    options
  );

// console.log(response.data)
  return response.data;
}


const  createmembercomment= async(formdata,token)=>{
  console.log(token)
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.post(
    `/api/membettask/comment`,formdata,
    options
  );

console.log(response.data)
  return response.data;
}



const memberservice= {memberprojectget,createmembercomment}
export default memberservice