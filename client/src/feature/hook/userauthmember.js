
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const userauthmember = () => {
    const { users } = useSelector(state => state.auth)
    const [userloading, setuserloading] = useState(true)
    const [userExist, setuserExist] = useState(false)
    // const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if (users) {
            setuserExist(true)
            // setIsAdmin(users.isadmin === false)
        } else {
            setuserExist(false)
            // setIsAdmin(false)
        }
        setuserloading(false)
    }, [users])

    return { userloading, userExist }
}

export default userauthmember
