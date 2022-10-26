import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest')
const fetchContactSuccess = createAction('contacts/fetchContactSuccess')
const fetchContactError = createAction('contacts/fetchContactError')

const addContactRequest = createAction('contacts/addContactRequest')
const addContactSuccess = createAction('contacts/addContactSuccess')
const addContactError = createAction('contacts/addContactError')

const deleteContactRequest = createAction('contacts/deleteContactRequest')
const deleteContactSuccess = createAction('contacts/deleteContactSuccess')
const deleteContactError = createAction('contacts/deleteContactError')

const editContact = createAction('contacts/edit')
const filter = createAction('contacts/changeFilter')

export { addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, fetchContactRequest, fetchContactSuccess, fetchContactError, filter, editContact }