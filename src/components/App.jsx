import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews';
import { Movies } from '../pages/Movies';
import { SharedLayout } from './SharedLayout';
import { searchMovie } from '../actions/action';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
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

  const handleOnMovies = e => {
    setMovies([]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<SharedLayout handleOnMovies={handleOnMovies} />}
      >
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home movies={movies} />} />
      </Route>
    </Routes>
  );
};

export default App;
