import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addContact } from "../../redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Spinner } from "react-bootstrap";



export default function ContactForm({handleClose}) {

    const {register, handleSubmit} = useForm()

    
    const contacts = useSelector(state => state.contactsReducer.contacts)
    const isLoading = useSelector(state => state.contactsReducer.loading)

    const dispatch = useDispatch()
    
    const onSubmit = ({ name, number }) => {
        
        console.log(name, number)

        // валидация имени
        const contactName = contacts.every(e => e.name !== name)

         if (contactName) {
            dispatch(addContact({name, number}))
         } else {
             alert(`${name} is already in contacts.`)
         }
    }

    return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" {...register("name")} placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" {...register("number")} placeholder="Tel" />
                </Form.Group>

                {isLoading ? <Button variant="primary" disabled>
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                
                    </Button>:
                <Button variant="primary" type="submit" style={{background: '#2877EF', border: '1px solid #2877EF'}} onClick={handleClose}>
                Add contact
                </Button>}
            </Form>
    )

    
        // return (
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             name="name"
        //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //             required
        //             value={name}
        //             onChange={handleChange}
        //             placeholder="name"
        //         />
        //         <input
        //             type="tel"
        //             name="number"
        //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //             required
        //             value={number}
        //             onChange={handleChange}
        //             placeholder="number"
        //         />
        //         <button type="submit" className='button'>Add contact <FontAwesomeIcon icon={faPlus} /></button>
        //     </form>) 
    
}

// на классах

// export default class ContactForm extends React.Component {
//     state = {
//         name: "",
//         number: "",
//     }

//     handleChange = (e) => {
//         this.setState({ [e.currentTarget.name]: e.currentTarget.value });

//     };
    
//     handleSubmit = e => {
//         e.preventDefault();

//         // валидация имени
//         const contactsName = this.props.сontactState.every(e => e.name !== this.state.name)

//         contactsName ? 
//             this.props.onSubmit({
//             id: nanoid(2),
//             ...this.state
//         }) : alert(`${this.state.name} is already in contacts.`)

//         this.reset()

//     }
    
//     reset = () => {
//         this.setState({
//         name: "",
//         number: "",
//         });
//     };

//     render() {
//         const {name, number} = this.state

//         return (
//             <form className="form" onSubmit={this.handleSubmit}>
//                 <div className="labels">
//                     <label className="labels__item">
//                         Name
//                         <input
//                             type="text"
//                             name="name"
//                             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                             required
//                             value={name}
//                             onChange={this.handleChange}
//                             placeholder="John"
//                         />
//                     </label>
//                     <label className="labels__item">
//                         Tel
//                         <input
//                             type="tel"
//                             name="number"
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             required
//                             value={number}
//                             onChange={this.handleChange}
//                             placeholder="123-23-34"
//                         />
//                     </label>
//                 </div>
//                 <button type="submit" className='button'>Add contact</button>
//             </form>)
//         }
// }