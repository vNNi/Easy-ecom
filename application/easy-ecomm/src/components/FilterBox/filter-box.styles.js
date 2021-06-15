import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 14em;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.text.light};
  font-size: ${({ theme }) => theme.fonts.high};
  margin: 20px 0;
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.light};
`;
