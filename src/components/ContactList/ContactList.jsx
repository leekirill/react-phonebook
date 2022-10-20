import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import * as action from '../../redux/contacts/contacts-actions'
import { useSelector, useDispatch } from 'react-redux'


export default function ContactList() {

  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filterChange)
  
  const dispatch = useDispatch()

  const onDeleteContact = (id) => dispatch(action.deleteContact(id))

  const filteredContacts = contacts.filter((e) =>
      e.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <ul className="contacts">

        { filteredContacts.map(({id, name, number}) => {
          return <li key={id}><span>{`${name + ": " + number}`}</span><button className="button__secondary" onClick={() => onDeleteContact(id)}><FontAwesomeIcon icon={faTrash} /></button></li>;
        })}

        </ul>
    )
} 