import style from './Login.module.scss'

const Login = () => {
    return (
    <div className={style.container}>
        <div className={style.content}> 
            <h2 className={style.h2}>Log in</h2>
            <form className={style.form} >
                <input className={style.input} type="email" name='email' placeholder='email'/>
                <input className={style.input} type="password" name='password' placeholder='password'/>
                <button className={style.btn}>Log in</button>
            </form>
        </div>
    </div>
    )
}

export default Login

