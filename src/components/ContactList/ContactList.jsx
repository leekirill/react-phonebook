import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { deleteContact } from '../../redux/contacts/contacts-operations'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import ContactListForm from '../ContactList/ContactListForm'
import { nanoid } from 'nanoid'



export default function ContactList() {
  const [isActive, setIsActive] = useState(false)
  const [index, setIndex] = useState(null)
  // const [contactName, setName] = useState('')
  // const [contactNumber, setNumber] = useState('')

  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filterChange)
  
  const dispatch = useDispatch()

  const onDeleteContact = (id) => dispatch(deleteContact(id))


  const editContact = (id) => {
    setIndex(id)
    setIsActive(!isActive)
  }
  
  const filteredContacts = contacts.filter((e) =>
      e.name.toLowerCase().includes(filter.toLowerCase())
  );  


    return (
      <ul className="contacts">
        
        {filteredContacts.map(({ id, name, number }) => {

          if (id === index && isActive === true) {
            return <ContactListForm key={nanoid(2)} name={name} number={number} setIsActive={setIsActive} contacts={contacts} />
          }
            return <li key={nanoid(2)}><span>{`${name + ": " + number}`}</span><button className="button__edit" onClick={() => editContact(id)}><FontAwesomeIcon icon={faEdit} /></button><button className="button__delete" onClick={() => onDeleteContact(id)}><FontAwesomeIcon icon={faTrash} /></button></li>;
        })}

      </ul>
    )
} 

    // const [name, setName] = useState(contactName)
    // const [number, setNumber] = useState(contactNumber)

    
    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // }
    // const handleNumberChange = (e) => {
    //     setNumber(e.target.value)
    // }
    
    // return (
    //     <form>
    //         <input value={name} onChange={handleNameChange}></input>
    //         <input value={number} onChange={handleNumberChange}></input>
    //         <button onClick={() => saveContact()}>Save</button>
    //     </form>
    // )