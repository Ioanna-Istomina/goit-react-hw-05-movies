import { useState } from 'react';

const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleFilmChange = ev => {
    setQuery(ev.currentTarget.value.toLowerCase());
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (query.trim() === '') {
      return;
    }
    // onSubmit(query);
    const queryString = query;
    setSearchParams({ query: queryString });
    setQuery('');
  };

  return (
    <form
      style={{ paddingTop: '40px', paddingLeft: '20px' }}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          style={{ width: '250px', height: '20px' }}
          type="text"
          name="search"
          onChange={handleFilmChange}
          value={query}
        />
      </label>
      <button style={{ height: '25px' }} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
