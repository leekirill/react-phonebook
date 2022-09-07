export default function ContactList({ contacts, filter }) {

  
  
  const filteredContacts = contacts.filter((e) =>
      e.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <ul className="contacts">

        {  filteredContacts.map((e) => {
          return <li key={e.id}>{`${e.name + ": " + e.number}`}</li>;
        })}
        </ul>
    )
}