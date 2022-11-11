import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchContact } from "../../redux/contacts/contacts-operations";
import { ThreeDots } from "react-loader-spinner";

import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";

const Homepage = () => {

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
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        )}
                        <p>Total: {contacts && contacts.length}</p>
                    </div>
                    <ContactList />
                    </>
                )}
                </div>
            </div>
    )
}     

export default Homepage