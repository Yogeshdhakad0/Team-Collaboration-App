import { Navigate, Outlet } from 'react-router-dom'

import userauthmember from '../feature/hook/userauthmember'

const Privatemember = () => {
    const { userExist, userloading } = userauthmember()

    if (userloading) {
        return <div>Loading...</div>
    }

    return userExist ? <Outlet /> : <Navigate to="/login" />
}

export default Privatemember
