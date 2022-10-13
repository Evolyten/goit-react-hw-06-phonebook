import { createSlice } from '@reduxjs/toolkit';

// export const addContacts = createAction('contacts/addContacts');
// export const removeContacts = createAction('contacts/removeContacts');
// export const filterContacts = createAction('contacts/filterContacts');

// export const contactsReducer = createReducer(
//   {
//     contacts: [],
//     filter: '',
//   },
//   {
//     [addContacts]: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     [removeContacts]: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     [filterContacts]: (state, action) => {
//       state.filter = action.payload;
//     },
//   }
// );

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContacts(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    removeContacts(state, action) {
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload),
        ],
      };
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, removeContacts, filterContacts } =
  contactSlice.actions;
export default contactSlice;
