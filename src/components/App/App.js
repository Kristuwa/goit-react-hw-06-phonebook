import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import { Container, TitleForm, TitleContacts } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Filter from 'components/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilterList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterList = getFilterList();

  return (
    <Container>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      {filterList.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {filterList.length === 0 && contacts.length > 0 && <Filter />}
    </Container>
  );
};
