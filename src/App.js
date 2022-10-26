import { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contacts/contacts-operations";

export default function App() {
  const [contacts, setContacts] = useState([]);

  // const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();
  const fetchContact = () => dispatch(fetchContacts());

  console.log(fetchContact());
  useEffect(() => {
    // localStorage.setItem("contacts", JSON.stringify(contacts.contacts));
    setContacts(fetchContact());
  }, []);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm сontactState={contacts} />
      <div className="contactsDiv">
        <div className="contactsHeading">
          <h2>Contacts</h2>
          <p>Total: {contacts && contacts.length}</p>
        </div>
        <Filter />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

// на классах

// state = {
//   contacts: [],
//   filter: "",
// };

// addContact = (obj) => {
//   this.setState((prevState) => ({
//     contacts: [obj, ...prevState.contacts],
//   }));
// };

// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };

// changeFilter = (evt) => {
//   this.setState({
//     filter: evt.currentTarget.value,
//   });
// };

// componentDidMount() {
//   const contacts = localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({
//       contacts: JSON.parse(localStorage.getItem("contacts")),
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log(prevProps);
//   if (prevState !== this.state.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

// render() {
//   const { filter, contacts } = this.state;
//   const { addContact, changeFilter, deleteContact } = this;

//   return (
//     <div className="App">
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} сontactState={contacts} />
//       <div className="contactsHeading">
//         <h2>Contacts</h2>
//         <p>Total: {this.state.contacts.length}</p>
//       </div>
//       <Filter value={filter} handleChange={changeFilter} />
//       <ContactList
//         contacts={contacts}
//         filter={filter}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// }
