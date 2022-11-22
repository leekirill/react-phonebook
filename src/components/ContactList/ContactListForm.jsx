import { useState } from "react"
import { useDispatch } from "react-redux"
import { editContact } from '../../redux/contacts/contacts-operations'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactListForm({ name, number, index, setIsActive, handleShow }) {

    const dispatch = useDispatch()
    const onEditContact = ({id, name, number}) => dispatch(editContact({id, name, number}))

    const [contactsName, setContactsName] = useState(name)
    const [contactsNumber, setContactsNumber] = useState(number)

    const handleNameChange = (e) => setContactsName(e.target.value)
    const handleNumberChange = (e) => setContactsNumber(e.target.value)

    const saveContact = (index, name, number) => {
        setContactsName(contactsName)
        setContactsNumber(contactsNumber)
        setIsActive(false)
        onEditContact({id: index, name, number})
    }

    return (
        <Form onSubmit={() => saveContact(index, contactsName, contactsNumber)}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    value={contactsName}
                    onChange={handleNameChange}
                    required>    
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    value={contactsNumber}
                    onChange={handleNumberChange}
                    required>    
                </Form.Control>
            </Form.Group>
            <Button type='submit' className="button" onClick={handleShow}>Save</Button>
        </Form>
    )
}

//    <Form onSubmit={handleSubmit(onSubmit)}>
//                 <h1 style={{marginBottom: '30px'}}>Log in</h1>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" {...register("email")} placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" {...register("password")} placeholder="Password" />
//                 </Form.Group>
//        </Form>
