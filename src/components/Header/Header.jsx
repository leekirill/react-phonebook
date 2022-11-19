import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import * as authOperations from '../../Redux/auth/auth-operations'
import style from './Header.module.scss'
import Button from 'react-bootstrap/Button';



const Header = () => {

    const userName = useSelector(state => state.authReducer.user.name)
    const isLoggedIt = useSelector(state => state.authReducer.toLoggedIn)

    const dispatch = useDispatch()

    return (
        <header>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.logo}>
                        <Link to='/' className={style.logoLink}>Phone<span>Book</span></Link>
                    </div>
                    <div className={style.nav}>
                        <NavLink to='/' className={({isActive}) => isActive ? style.linkActive : style.link}>Home</NavLink>
                        <NavLink to='contacts' className={({isActive}) => isActive ? style.linkActive : style.link}>Contacts</NavLink>
                    </div>
                    {!isLoggedIt ?
                    <div className={style.signup}>
                        <NavLink to='signup' className={({isActive}) => isActive ? style.linkActive : style.link}>Sign up</NavLink>
                        <NavLink to='login' className={({isActive}) => isActive ? style.linkActive : style.link}>Log in</NavLink>
                    </div> :
                    <div className={style.user}>
                            <span>{userName}</span>
                        <Button onClick={() => dispatch(authOperations.logOut())}>{`Log out`}</Button>
                    </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header