import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ContactList({ contacts, filter, onDeleteContact }) {

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