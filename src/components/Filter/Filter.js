import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice';
import { getFilter } from 'redux/filter/selectors';
import { getContacts } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const handleOnChange = e => dispatch(setFilter(e.target.value));

  return (
    <Label htmlFor="filter">
      Find contacts by name:
      <Input
        name="filter"
        type="text"
        value={filter}
        onChange={handleOnChange}
        disabled={contacts.length < 2 && !filter}
      />
    </Label>
  );
};

export default Filter;
