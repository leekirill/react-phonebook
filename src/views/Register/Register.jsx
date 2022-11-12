import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as authOperations from '../../Redux/auth/auth-operations'
import style from './Register.module.scss'

const Register = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name

        switch (name) {
            case 'name': 
                return setName(e.target.value);
            case 'email':
                return setEmail(e.target.value);
            case 'password':
                return setPassword(e.target.value);
            default: return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(authOperations.register({ name, email, password }))
        
        console.log(
            {name, email, password}
        )
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2 className={style.h2}>Sign up</h2>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input className={style.input} type="text" name='name' onChange={handleChange} value={name} placeholder='username'/>
                    <input className={style.input} type="email" name='email' onChange={handleChange} value={email} placeholder='email'/>
                    <input className={style.input} type="password" name='password' onChange={handleChange} value={password} placeholder='password'/>
                    <button className={style.btn} type='submit'>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register