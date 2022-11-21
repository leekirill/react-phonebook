import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as authOperations from '../../redux/auth/auth-operations'
import s from './Register.module.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'

import {ReactComponent as Image} from '../../assets/Reset password-pana 1.svg';

const Register = () => {
    
    const {register, handleSubmit} = useForm()
    
    const dispatch = useDispatch()

    const onSubmit = ({ name, email, password }) => {
      dispatch(authOperations.logIn({ name, email, password }))

      const input = document.getElementsByTagName('input')
      Array.from(input).map(e => e.disabled = 'true')
};

return (
    <div className={s.content}>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{marginBottom: '30px'}}>Sign up</h1>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control {...register('name')} type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control {...register('email')} type="email" placeholder="Enter email" />
      </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control {...register('password')} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
    <div><Image /></div>
    </div>
)
  
  
  
  

    // return (
    //     <div className={style.container}>
    //         <div className={style.content}>
    //             <h2 className={style.h2}>Sign up</h2>
    //             <form className={style.form} onSubmit={handleSubmit}>
    //                 <input className={style.input} type="text" name='name' onChange={handleChange} value={name} placeholder='username'/>
    //                 <input className={style.input} type="email" name='email' onChange={handleChange} value={email} placeholder='email'/>
    //                 <input className={style.input} type="password" name='password' onChange={handleChange} value={password} placeholder='password'/>
    //                 <button className={style.btn} type='submit'>Sign up</button>
    //             </form>
    //         </div>
    //     </div>
    // )
}

export default Register

