import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice';
import { getFilter } from 'redux/filter/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleOnChange = e => dispatch(setFilter(e.target.value));

  return (
    <Label htmlFor="filter">
      Find contacts by name:
      <Input
        name="filter"
        type="text"
        autoFocus
        value={filter}
        onChange={handleOnChange}
      />
    </Label>
  );
};

export default Filter;
