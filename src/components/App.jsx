import React from 'react';

import { ContactForm } from './ContactBook/ContactForm/ContactForm';
import UserList from './ContactBook/ContactList/ContactList';
import Filter from './ContactBook/Filter/Filter';
import css from './ContactBook/ContactBook.module.css';
import { Section } from './Section/Section';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <div className={css.contact_wrap}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {!!contacts.length && <UserList />}
      </Section>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}
