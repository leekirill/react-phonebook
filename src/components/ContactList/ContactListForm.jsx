import { useState } from "react"

export default function ContactListForm({ name, number, contacts, setIsActive }) {

    const [contactName, setName] = useState(name)
    const [contactNumber, setNumber] = useState(number)

    const saveContact = (e) => {
        e.preventDefault()
        setIsActive(false)
        contacts.map(e => {
            setName(e.name)
            setNumber(e.number)
        })
    }

   

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
    
    return (
        <form>
            <input value={contactName} onChange={handleNameChange}></input>
            <input value={contactNumber} onChange={handleNumberChange}></input>
            <button onClick={(e) => saveContact(e)}>Save</button>
        </form>
    )
}