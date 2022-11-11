import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Homepage from "./Views/Homepage/Homepage";
import Register from "./Views/Register/Register";
import Login from "./Views/Login/Login";

import "./index.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signup" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
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
