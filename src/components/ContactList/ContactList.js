import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilterList } from 'redux/selectors';

const ContactList = () => {
  const filterList = useSelector(getFilterList);
  return (
    <ContactsList>
      {filterList.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
};

export default ContactList;
