import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

import { Label, Form, Input } from './ContactForm.styled';
import { getContacts, getName, getNumber } from 'redux/selectors';
import { changeName } from 'redux/nameSlice';
import { changeNumber } from 'redux/numberSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const name = useSelector(getName);
  const number = useSelector(getNumber);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      contacts.map(contact => contact.name).includes(form.elements.name.value)
    ) {
      alert(`${form.elements.name.value} is already in contacts.`);
      return;
    }
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    dispatch(changeName(''));
    dispatch(changeNumber(''));
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        dispatch(changeName(e.target.value));
        break;

      case 'number':
        dispatch(changeNumber(e.target.value));
        break;

      default:
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>

      <button type="submit">Add contact</button>
    </Form>
  );
};
