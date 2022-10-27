import { useEffect, useState } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { fetchContact } from "./redux/contacts/contacts-operations";
import { ThreeDots } from "react-loader-spinner";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const contacts = useSelector((state) => state.contacts);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <div className="contacts">
        {isLoading ? (
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#5076ff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <>
            <h2>Contacts</h2>
            <div className="contactsHeading">
              {isActive ? (
                <Filter />
              ) : (
                <button
                  className="searchButton"
                  onClick={() => setIsActive(!isActive)}
                >
                  Search
                </button>
              )}
              <p>Total: {contacts && contacts.length}</p>
            </div>
            <ContactList />
          </>
        )}
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
