import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as authOperations from '../../Redux/auth/auth-operations'
import s from './Register.module.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const cleanInput = (value) => {
        setName(value)
        setEmail(value)
        setPassword(value)
    }

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
        
        cleanInput('')

        dispatch(authOperations.register({ name, email, password }))

    }

return (
    <div className={s.content}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
    <div>{/* <Img /> */}</div>
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

