import { FormContainer, Input, Button, Label } from './ContactForm.styled';
import { addContact } from 'redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, number };
    for (let item of contacts) {
      if (contact.name.toLowerCase() === item.name.toLowerCase()) {
        alert(`${contact.name} is already in contacts`);
        resetForm();
        return;
      }
    }
    dispatch(addContact(contact));
    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  return (
    <FormContainer autoComplete="of" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name:
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

export default ContactForm;
