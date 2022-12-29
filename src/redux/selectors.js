export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filters;

export const getFilterList = state => {
  const normalizedFilter = state.filters.toLowerCase();
  return state.contacts.contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
