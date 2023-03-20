import { useLocation } from 'react-router-dom';
import { getMovieCredits } from '../actions/action';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import emptyPoster from '../resources/emptyPoster.webp';
import { Li, CastLink, Person } from '../components/Cast.styled';

export const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCast = async movieId => {
      try {
        const castResponce = await getMovieCredits(movieId);
        setCasts([...castResponce.data.cast]);
      } catch (error) {
        return new Error();
      }
    };
    fetchCast(id);
  }, [id]);

  return (
    <section>
      {!!casts.length && (
        <CastLink>
          {casts?.map(cast => (
            <Li key={cast.cast_id}>
              <Person
                src={
                  cast?.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : emptyPoster
                }
                alt={cast.name}
              />
              <p>
                <b>Name:</b> {cast.name}
              </p>
              <p>
                <b>Character:</b> {cast.character}
              </p>
            </Li>
          ))}
        </CastLink>
      )}
    </section>
  );
};
