import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchContact } from "../../redux/contacts/contacts-operations";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "react-bootstrap/Button";


import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";

import style from './Contacts.module.scss'


const Contacts = () => {

    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const contacts = useSelector((state) => state.contactsReducer.contacts);
    const isLoading = useSelector((state) => state.contactsReducer.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);

    return (
        
        <div className={style.content}>
        <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add new contact</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ContactForm handleClose={handleClose} />     
                    </Offcanvas.Body>
                </Offcanvas>

            <div className={style.contacts}>

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

                </div>
           </div>

        )
        
}     

export default Contacts
