import axios from "axios"

const Registerservice= async(formdata)=>{

    const response = await axios.post(`/api/auth/register`,formdata);
    
    localStorage.setItem('user',JSON.stringify(response.data))
    return response.data
}

const Loginservice= async(formdata)=>{
    const response = await axios.post(`/api/auth/logins`,formdata)

    localStorage.setItem('user',JSON.stringify(response.data))
console.log(response.data)
    return response.data
}




const authservice= {Registerservice ,Loginservice}
export default authservice