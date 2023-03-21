import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = props => {
  const { handleOnMovies } = props;
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies" onClick={handleOnMovies}>
            Movies
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

SharedLayout.propTypes = {
  handleOnMovies: PropTypes.func.isRequired,
};
export default SharedLayout;
