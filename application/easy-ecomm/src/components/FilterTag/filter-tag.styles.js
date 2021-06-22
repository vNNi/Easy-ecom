import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  cursor: pointer;
  :hover {
    padding: 12px;
  }
`;

export const Label = styled.span`
  text-transform: capitalize;
  color: ${({ theme }) => theme.text.light};
`;
