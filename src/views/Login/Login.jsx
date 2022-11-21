import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { ThreeDots } from 'react-loader-spinner'
import * as authOperations from '../../redux/auth/auth-operations'
import s from './Login.module.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {ReactComponent as Image} from '../../assets/Reset password-pana 1.svg';

const Login = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const isLoading = useSelector(state => state.authReducer.isLoading)
    const displatch = useDispatch()

    const onSubmit = ({ email, password }) => {
        displatch(authOperations.logIn({ email, password }))

        const input = document.getElementsByTagName('input')
        Array.from(input).map(e => e.disabled = 'true')
    };

    return (
        <div className={s.content}>
            
            
            <Form onSubmit={handleSubmit(onSubmit)} style={{ width: '30%'}}>
                <h1 style={{marginBottom: '30px'}}>Log in</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" {...register("email")} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register("password")} placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{background: '#2877EF', border: '1px solid #2877EF'}}>
                    {isLoading ?
                    <ThreeDots
                    height="24"
                    width="30"
                    radius="9"
                    color="#fff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{justifyContent: 'center'}}
                    wrapperClassName=""
                    visible={true}
                    /> : 'Log in'}
                </Button>
            </Form>
            <div>
                {<Image />}
            </div>
            </div>
    )
}

export default Login


