import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { deleteContact } from '../../Redux/contacts/contacts-operations'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { ThreeDots } from 'react-loader-spinner'
import ContactListForm from './ContactListForm'
import style from './ContactList.module.scss'

export default function ContactList() {

  const [isActive, setIsActive] = useState(false)
  const [index, setIndex] = useState(null)

  const contacts = useSelector(state => state.contactsReducer.contacts)
  const filter = useSelector(state => state.contactsReducer.filterChange)
  const isLoading = useSelector(state => state.contactsReducer.loading)
  
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
      <ul className={style.contactsList}>
        
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
            return <li key={nanoid(2)} className={style.li}><span className={style.span}>{`${name + ": " + number}`}</span><button className={style.btnEdit} onClick={() => editContact(id)}><FontAwesomeIcon icon={faEdit} /></button><button className={style.btnDelete} onClick={() => onClickDeleteContact(id)}><FontAwesomeIcon icon={faTrash} /></button></li>;
        })}

      </ul>
    )
}