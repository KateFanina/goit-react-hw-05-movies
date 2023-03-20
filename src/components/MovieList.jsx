import PropTypes from 'prop-types';
import emptyPoster from '../resources/emptyPoster.webp';
import {
  MainDiv,
  Ul,
  Li,
  Img,
  LinkToMovies,
  ImgWrapper,
  Title,
} from './MovieList.styled';

function MovieList(props) {
  const { from, movies } = props;
  return (
    <MainDiv>
      <Ul>
        <ImgWrapper>
          {movies.map(movie => (
            <Li key={movie.id}>
              <LinkToMovies to={`/movies/${movie.id}`} state={from}>
                <Img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : emptyPoster
                  }
                  alt={movie.title}
                />
                <Title>{movie.title}</Title>
              </LinkToMovies>
            </Li>
          ))}
        </ImgWrapper>
      </Ul>
    </MainDiv>
  );
}

MovieList.propTypes = {
  from: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieList;
