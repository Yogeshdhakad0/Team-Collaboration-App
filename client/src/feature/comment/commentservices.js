import axios from "axios";

const createcomment= async(token,formData)=>{
    console.log(formData)
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.post(
    `/api/project/task/${formData.id}/comment`,formData,
    options
  );

console.log(response.data)
  return response.data;
}




const getallcomment= async(token)=>{

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.get(
    `/api/project/comment/taks`,
    options
  );


console.log(response.data)
  return response.data;
}







const getadmincomment= async(token,id)=>{

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // ✅ Send plain object, not nested under `formData`
  const response = await axios.get(
    `/api/project/task/${id}`,
    options
  );


console.log(response.data)
  return response.data;
}







const commentservices= {createcomment,getallcomment,getadmincomment}
export default commentservices