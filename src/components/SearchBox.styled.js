import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  padding-left: 40px;
  display: inline-flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
`;
export const SearchButton = styled.button`
  position: absolute;
  right: 1px;
  display: inline-block;
  width: 40px;
  height: 36px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  & :hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 30px;
  height: 30px;
`;
