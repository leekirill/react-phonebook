export default function ContactList({ contacts, filter, onDeleteContact }) {


  
  const filteredContacts = contacts.filter((e) =>
      e.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <ul className="contacts">

        { filteredContacts.map(({id, name, number}) => {
          return <li key={id}>{`${name + ": " + number}`}<button className="button__secondary" onClick={() => onDeleteContact(id)}>Delete</button></li>;
        })}

        </ul>
    )
} 