import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding: 12px;
`;

export const Description = styled.div`
  padding: 20px;
`;
export const Title = styled.h2`
  margin-top: 0px;
`;
export const Img = styled.img`
  height: 400px;
  border-radius: 10px;
`;
export const AdditInfo = styled.div`
  margin-left: 20px;
`;
export const AdditList = styled.div`
  display: flex;
`;
export const AdditItem = styled.div`
  margin-right: 30px;
  border: 2px solid black;
  padding: 10px;
  list-style: none;
  &:hover {
    background-color: orangered;
    color: white;
    border: 2px solid;
  }
`;
export const LinkA = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
