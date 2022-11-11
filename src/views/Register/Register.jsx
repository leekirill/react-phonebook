import style from './Register.module.scss'

const Register = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2 className={style.h2}>Sign up</h2>
                <form className={style.form}>
                    <input className={style.input} type="text" name='name' placeholder='username'/>
                    <input className={style.input} type="email" name='email' placeholder='email'/>
                    <input className={style.input} type="password" name='password' placeholder='password'/>
                    <button className={style.btn}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register