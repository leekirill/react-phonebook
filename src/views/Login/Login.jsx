import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import * as authOperations from '../../Redux/auth/auth-operations'

import style from './Login.module.scss'

const Login = () => {

    const { register, handleSubmit } = useForm()
    const displatch = useDispatch()

    const onSubmit = ({email, password}) => {
        displatch(authOperations.logIn({email, password}))
    };

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    
    // const displatch = useDispatch()
    // const handleChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value

    //     switch (name) {
    //         case 'email':
    //             return setEmail(value);
    //         case 'password':
    //             return setPassword(value);
    //         default: return
    //     }
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     displatch(authOperations.logIn({ email, password }))
        
    //     cleanInput('')
    // }

    return (
    <div className={style.container}>
        <div className={style.content}> 
            <h2>Log in</h2>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <input type='email' {...register("email")} placeholder='email'></input>
                    <input type='password' {...register("password")} placeholder='password'></input>
                <button className={style.btn} type='submit'>Log in</button>
            </form>
        </div>
    </div>
    )
}

export default Login

