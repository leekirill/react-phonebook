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
        <form>
            <input value={contactName} onChange={handleNameChange}></input>
            <input value={contactNumber} onChange={handleNumberChange}></input>
            <button type='submit' onClick={() => saveContact(index, contactName, contactNumber)}>Save</button>
        </form>
    )
}