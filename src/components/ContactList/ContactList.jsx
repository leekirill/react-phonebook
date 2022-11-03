import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { deleteContact } from '../../redux/contacts/contacts-operations'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { ThreeDots } from 'react-loader-spinner'
import ContactListForm from '../ContactList/ContactListForm'

export default function ContactList() {

  const [isActive, setIsActive] = useState(false)
  const [index, setIndex] = useState(null)

  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filterChange)
  const isLoading = useSelector(state => state.loading)
  
  const dispatch = useDispatch()
  const onDeleteContact = (id) => dispatch(deleteContact(id))

  const onClickDeleteContact = (id) => {
    if (window.confirm("Are you sure?") === false) return
    return onDeleteContact(id)
  }

  const editContact = (id) => {
    setIndex(id)
    setIsActive(!isActive)
  }
  
  const filteredContacts = contacts.filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))

  if (filteredContacts.length === 0) return <span>No found</span>

    return (
      <ul className="contactsList">
        
        {isLoading ? <ThreeDots 
          height="40" 
          width="40" 
          radius="9"
          color="#5076ff" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          /> : filteredContacts.map(({ id, name, number }) => {

          if (id === index && isActive === true) {
            return <ContactListForm key={nanoid(2)} name={name} number={number} setIsActive={setIsActive} index={index} />
          } 
            return <li key={nanoid(2)}><span>{`${name + ": " + number}`}</span><button className="button__edit" onClick={() => editContact(id)}><FontAwesomeIcon icon={faEdit} /></button><button className="button__delete" onClick={() => onClickDeleteContact(id)}><FontAwesomeIcon icon={faTrash} /></button></li>;
        })}

      </ul>
    )
}