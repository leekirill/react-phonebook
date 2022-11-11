import { Link } from 'react-router-dom'
import style from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.logo}>
                        <Link to='/'>Logo</Link>
                    </div>
                    <div className={style.signup}>
                        <Link to='signup'>Регистрация</Link>
                        <Link to='login'>Войти</Link>
                    </div>
                    <div className={style.user}>
                        <span>{`Добро пожаловать, ${'User'}`}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header