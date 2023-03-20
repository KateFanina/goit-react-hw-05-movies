import PropTypes from 'prop-types';
import {
  SearchForm,
  Wrapper,
  SearchButton,
  Input,
  Icon,
} from './SearchBox.styled';

export const SearchBox = props => {
  const { handleSubmit } = props;
  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <Icon />
        </SearchButton>
        <Input type="text" name="search" placeholder="Search movies" />
      </SearchForm>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
