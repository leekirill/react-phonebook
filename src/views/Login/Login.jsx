import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { ThreeDots } from 'react-loader-spinner'
import * as authOperations from '../../Redux/auth/auth-operations'

import style from './Login.module.scss'

const Login = () => {

    const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
    })

    const isLoading = useSelector(state => state.authReducer.isLoading)
    const displatch = useDispatch()

    const onSubmit = ({email, password}) => {
        displatch(authOperations.logIn({ email, password }))

        const input = document.getElementsByTagName('input')
        Array.from(input).map(e => e.disabled = 'true')
    };

    return (
    <div className={style.container}>
        <div className={style.content}> 
            <h2>Log in</h2>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <input type='email' {...register("email")} placeholder='email'></input>
                    <input type='password' {...register("password")} placeholder='password'></input>
                <button className={style.btn} type='submit'>{isLoading ? <ThreeDots
                    height="18"
                    width="40"
                    radius="9"
                    color="#fff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{justifyContent:'center'}}
                    wrapperClassName=""
                    visible={true}
                    /> :'Log in'}</button>
            </form>
        </div>
    </div>
    )
}

export default Login

