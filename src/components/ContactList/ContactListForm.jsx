import { useState } from "react"
import { useDispatch } from "react-redux"
import { editContact } from '../../Redux/contacts/contacts-operations'

export default function ContactListForm({ name, number, index, setIsActive }) {

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
        <form onSubmit={() => saveContact(index, contactsName, contactsNumber)}>
            <input
                type="text"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={contactsName}
                onChange={handleNameChange}
                required></input>
            <input
                type="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                value={contactsNumber}
                onChange={handleNumberChange}
                required></input>
            <button type='submit' className="button">Save</button>
        </form>
    )
}