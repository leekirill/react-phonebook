import React from "react";
import "./index.scss";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (obj) => {
    this.setState((prevState) => ({
      contacts: [obj, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (evt) => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    if (prevState !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const { addContact, changeFilter, deleteContact } = this;

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} сontactState={contacts} />
        <div className="contactsHeading">
          <h2>Contacts</h2>
          <p>Total: {this.state.contacts.length}</p>
        </div>
        <Filter value={filter} handleChange={changeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
