import axios from "axios"

const   BaseUrl='https://workspace-p7ko.onrender.com'
const Registerservice= async(formdata)=>{

    const response = await axios.post(`${BaseUrl}/api/auth/register`,formdata);
    
    localStorage.setItem('user',JSON.stringify(response.data))
    return response.data
}

const Loginservice= async(formdata)=>{
    const response = await axios.post(`${BaseUrl}/api/auth/logins`,formdata)

    localStorage.setItem('user',JSON.stringify(response.data))
console.log(response.data)
    return response.data
}




const authservice= {Registerservice ,Loginservice}
export default authservice