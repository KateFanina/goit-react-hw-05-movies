import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from '../actions/action';
import { SearchBox } from '../components/SearchBox';
import MovieList from '../components/MovieList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    if (search === '') return;
    async function fetchSearch() {
      try {
        const responce = await searchMovie(search);
        const newMovies = responce.data?.results ?? [];
        setMovies(newMovies);
      } catch (error) {
        return new Error();
      }
    }
    fetchSearch();
  }, [search]);

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
