import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainDiv = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-gap: 16px;
  margin-top: 12px;
  margin-bottom: 0;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Ul = styled.ul`
  padding-left: 0;
`;

export const Li = styled.li`
  list-style: none;
  max-width: 210px;
  text-align: center;
  & :hover {
    scale: 1.02;
  }
`;

export const Img = styled.img`
  display: block;
  margin-top: 0px;
  height: 310px;
  border-radius: 15px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
    cursor: zoom-in;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: grid;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-auto-flow: row;
  padding-top: 5px;
`;
export const LinkToMovies = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
`;
