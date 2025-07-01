




import { Navigate, Outlet } from 'react-router-dom'
import useAuthstatus from '../feature/hook/useauthstatus'
// import useAuthstatus from '../features/hooks/useAuthstatus'

const Privatecomponent = () => {
    const { userExist, userloading, isAdmin } = useAuthstatus()

    if (userloading) {
        return <div>Loading...</div>
    }

    // if not logged in, redirect to login
    if (!userExist) {
        return <Navigate to="/login" />
    }

    // if logged in but not admin, redirect to not-authorized or home
    if (!isAdmin) {
        return <Navigate to="/not-authorized" />
    }

    // else render admin protected route
    return <Outlet />
}

export default Privatecomponent
