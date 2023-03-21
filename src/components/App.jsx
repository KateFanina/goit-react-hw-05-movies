import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from '../actions/action';
// import { SharedLayout } from './SharedLayout';
const SharedLayout = lazy(() => import('./SharedLayout'));

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));
const Movies = lazy(() => import('../pages/Movies'));

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
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
