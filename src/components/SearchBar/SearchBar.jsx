import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: '',
  };

  const handleSubmit = values => {
    const { query } = values;
    if (!query.trim()) {
      toast.error('Search field is empty!');
      return;
    }
    setQuery(query);
  };

  return (
    <header>
      <Toaster position="top-center" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.searchBar}>
          <Field
            className={css.searchInput}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            <FcSearch size={17} /> Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
