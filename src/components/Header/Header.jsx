import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import style from './Header.module.scss'


const Header = () => {

    const userName = useSelector(state => state.authReducer.user.name)
    const isLoggedIt = useSelector(state => state.authReducer.toLoggedIn)

    return (
        <header>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.logo}>
                        <Link to='/' className={style.link}>Phone<span>Book</span></Link>
                    </div>
                    {!isLoggedIt ?
                    <div className={style.signup}>
                        <NavLink to='signup' className={({isActive}) => isActive ? style.linkActive : style.link}>Регистрация</NavLink>
                        <NavLink to='login' className={({isActive}) => isActive ? style.linkActive : style.link}>Войти</NavLink>
                    </div> :
                    <div className={style.user}>
                        <span>{`Добро пожаловать, ${userName}`}</span>
                    </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header