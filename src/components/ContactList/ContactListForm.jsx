import { useState } from "react"
import { useDispatch } from "react-redux"
import { editContact } from '../../redux/contacts/contacts-operations'

export default function ContactListForm({ name, number, setIsActive, index }) {

    const dispatch = useDispatch()
    const onEditContact = (id, name, number) => dispatch(editContact(id, name, number))

    const [contactName, setName] = useState(name)
    const [contactNumber, setNumber] = useState(number)


    const saveContact = (index, name, number) => {
        setName(contactName)
        setNumber(contactNumber)
        setIsActive(false)

        return onEditContact(index, name, number)
    }

    const handleNameChange = (e) => setName(e.target.value)
    const handleNumberChange = (e) => setNumber(e.target.value)

    
    return (
        <form onSubmit={() => saveContact(index, contactName, contactNumber)}>
            <input
                type="text"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={contactName}
                onChange={handleNameChange}
                required></input>
            <input
                type="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                value={contactNumber}
                onChange={handleNumberChange}
                required></input>
            <button type='submit'>Save</button>
        </form>
    )
}