import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';
import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length > 0 ? (
        <>
          <ContactsList />
        </>
      ) : (
        'Sorry. Your phonebok is empty.'
      )}
      <GlobalStyle />
    </>
  );
};
