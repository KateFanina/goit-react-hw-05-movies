import styled from 'styled-components';

export const MainDiv = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-gap: 16px;
  margin-top: 12px;
  margin-bottom: 0;
  padding: 0;
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
`;

export const Person = styled.img`
  display: block;
  margin-top: 20px;
  height: 310px;
  /* width: 360px; */
  border-radius: 10px;
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
`;

export const CastLink = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 0;
  padding-left: 10px;
`;
