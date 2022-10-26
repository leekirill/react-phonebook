import { useState } from "react"
// import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addContact } from "../../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";

export default function ContactForm({ сontactState }) {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch()
    const onSubmit = (contact) => dispatch(addContact(contact))

    const handleChange = (e) => {
        const name = e.currentTarget.name
       
        switch (name) {
            case 'name':
                setName(e.currentTarget.value)
                break
            case 'number':
                setNumber(e.currentTarget.value)
                break
            default:
                throw new Error('Ошибка')
        }
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        // валидация имени
        // const contactsName = сontactState.contacts.every(e => e.name !== name)

        // if (contactsName) {
            onSubmit({
                // id: nanoid(2),
                name,
                number
            }) 
            reset()
        // } else {
        //     alert(`${name} is already in contacts.`)
        // }
    }
    
    const reset = () => {
        setName('')
        setNumber('')
    };

        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="labels">
                    <label className="labels__item">
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChange}
                            placeholder="John"
                        />
                    </label>
                    <label className="labels__item">
                        Tel
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleChange}
                            placeholder="123-23-34"
                        />
                    </label>
                </div>
                <button type="submit" className='button'>Add contact <FontAwesomeIcon icon={faPlus} /></button>
            </form>) 
    
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