// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"

// const useAuthstatus=()=>{
//     const {users}=useSelector(state=>state.auth)
//     const [userloading, setuserloading]=useState(true)
//     const [userExist,setuserExist]=useState(false)
  
//     useEffect(()=>{
//         users ? setuserExist(true):setuserExist(false)
// setuserloading(false)
//     },[users])

//     return {userloading,userExist}
// }

// export default  useAuthstatus


import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useAuthstatus = () => {
    const { users } = useSelector(state => state.auth)
    const [userloading, setuserloading] = useState(true)
    const [userExist, setuserExist] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if (users) {
            setuserExist(true)
            setIsAdmin(users.isadmin === true)
        } else {
            setuserExist(false)
            setIsAdmin(false)
        }
        setuserloading(false)
    }, [users])

    return { userloading, userExist, isAdmin }
}

export default useAuthstatus
