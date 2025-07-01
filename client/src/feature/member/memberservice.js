import axios from "axios";
const   BaseUrl='https://workspace-p7ko.onrender.com'
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
    `${BaseUrl}/api/membertask`,
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
    `${BaseUrl}/api/membettask/comment`,formdata,
    options
  );

console.log(response.data)
  return response.data;
}



const memberservice= {memberprojectget,createmembercomment}
export default memberservice