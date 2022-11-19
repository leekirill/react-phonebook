import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const PublicRoute = ({ children, restricted = false }) => {

    const isLoggedIn = useSelector(state => state.authReducer.toLoggedIn)
    return (
        isLoggedIn && restricted ? <Navigate replace to='/contacts' /> : children
    )
}

export default PublicRoute 

