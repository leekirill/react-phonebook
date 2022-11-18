import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchContact } from "../../Redux/contacts/contacts-operations";
import { ThreeDots } from "react-loader-spinner";

import Filter from "../../Components/Filter/Filter";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";

import style from './Contacts.module.scss'

const Contacts = () => {

const [isActive, setIsActive] = useState(false);

  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const isLoading = useSelector((state) => state.contactsReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

    return (
        <div className={style.content}>
                <div className={style.form}>
                    <h2>Add new contact</h2>
                    <ContactForm />
                </div>

            <div className={style.contacts}>
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
                    <ContactList />
                    <div className={style.contactsHeading}>
                        {isActive ? (
                        <Filter />
                        ) : (
                        <button
                            className={style.searchBtn}
                            onClick={() => setIsActive(!isActive)}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        )}
                        <p>Total: {contacts && contacts.length}</p>
                    </div>
                    </>
                )}
                </div>
           </div>

        )
        
}     

export default Contacts

``