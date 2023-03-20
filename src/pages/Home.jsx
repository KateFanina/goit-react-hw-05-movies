import { useEffect, useState } from 'react';
import { getTranding } from '../actions/action';
import MovieList from '../components/MovieList';
import { MainDiv } from '../pages/Home.styled';

export const Home = () => {
  const [trands, setTrands] = useState([]);
  useEffect(() => {
    const fetchTrandings = async () => {
      try {
        const trandingData = await getTranding();
        setTrands(trandingData.data.results);
      } catch (error) {
        return new Error();
      }
    };
    fetchTrandings();
  }, []);

  return (
    <main>
      <MainDiv>
        <MovieList movies={trands} from={{ from: '/' }} />
      </MainDiv>
    </main>
  );
};
