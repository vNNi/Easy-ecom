import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.highest};
  font-weight: bold;
  color: ${({ theme }) => theme.text.base};
`;

export const Description = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.high};
`;
