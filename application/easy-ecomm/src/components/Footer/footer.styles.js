import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.text.light};
  padding: 4em 0;
`;

export const Item = styled.a`
  color: ${({ theme }) => theme.text.light};
  font-size: ${({ theme }) => theme.fonts.medium};
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.text.light};
  }
`;

export const FooterBottom = styled.div`
  color: ${({ theme }) => theme.text.light};
  background-color: ${({ theme }) => theme.colors.third};
  width: 100%;
`;

export const FooterBottomText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.medium};
`;
