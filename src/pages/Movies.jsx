import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import MovieList from '../components/MovieList';

const Movies = props => {
  const { movies } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  return (
    <main>
      <SearchBox handleSubmit={handleSubmit} />
      <MovieList movies={movies} from={{ from: '/movies' }} />
    </main>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
