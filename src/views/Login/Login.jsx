import { useState } from 'react'
import style from './Login.module.scss'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default: return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({email, password})
    }

    return (
    <div className={style.container}>
        <div className={style.content}> 
            <h2>Log in</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <input className={style.input} type="email" name='email' onChange={handleChange} value={email} placeholder='email'/>
                <input className={style.input} type="password" name='password' onChange={handleChange} value={password} placeholder='password'/>
                <button className={style.btn} type='submit'>Log in</button>
            </form>
        </div>
    </div>
    )
}

export default Login

