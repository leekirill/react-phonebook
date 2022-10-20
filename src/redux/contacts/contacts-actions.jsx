import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add')
const deleteContact = createAction('contacts/delete')
const filter = createAction('contacts/changeFilter')


export { addContact, deleteContact, filter }