import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';
import { getMovieDetails } from '../actions/action';
import emptyPoster from '../resources/emptyPoster.webp';
import {
  Wrapper,
  Description,
  Title,
  Img,
  AdditInfo,
  AdditList,
  AdditItem,
  LinkA,
} from '../pages/MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async movieId => {
      try {
        const newDetails = await getMovieDetails(movieId);
        setDetails(newDetails.data);
      } catch (error) {
        return new Error();
      }
    };
    fetchDetails(id);
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const genres = details?.genres?.map(genre => genre.name).join(', ');
  return (
    <main>
      <BackLink to={`${backLinkHref}`}>Go back</BackLink>
      {!!Object.keys(details).length && (
        <>
          <Wrapper>
            <Img
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${details.poster_path}`
                  : emptyPoster
              }
              alt={details.title}
            />
            <Description>
              <Title>{details.title}</Title>
              <p>
                User score:
                <span>{(details.vote_average * 10).toFixed()}%</span>
              </p>
              <p>
                <b>Overview</b>
              </p>
              <p>{details.overview}</p>
              <p>
                <b>Genres</b>
              </p>
              <span>{genres || ''}</span>
            </Description>
          </Wrapper>
          <AdditInfo>
            <AdditList>
              <AdditItem>
                <LinkA to="cast" state={{ from: `${backLinkHref}` }}>
                  Cast
                </LinkA>
              </AdditItem>
              <AdditItem>
                <LinkA to="reviews" state={{ from: `${backLinkHref}` }}>
                  Reviews
                </LinkA>
              </AdditItem>
            </AdditList>
          </AdditInfo>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
