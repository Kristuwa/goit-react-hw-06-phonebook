import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import { Container, TitleForm, TitleContacts } from './App.styled';
import { useSelector } from 'react-redux';
import { getFilterList } from 'redux/selectors';
import Filter from 'components/Filter';
import { getContacts } from 'redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filterList = useSelector(getFilterList);

  return (
    <Container>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      {contacts.length === 0 && (
        <p>You have no contacts, add your first contact</p>
      )}
      {contacts.length > 0 && <Filter />}
      {filterList.length > 0 && <ContactList />}
    </Container>
  );
};
