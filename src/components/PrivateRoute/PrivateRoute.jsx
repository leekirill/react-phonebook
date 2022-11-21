import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(state => state.authReducer.toLoggedIn)

    return (
       isLoggedIn ? children : <Navigate replace to='/login'/>
    )
}

export default PrivateRoute

