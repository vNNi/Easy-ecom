import styled from 'styled-components';

export const WhoWeAreContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 3em;
`;

export const WhoWeAreTitle = styled.h3`
  color: ${({ theme }) => theme.text.light};
  font-weight: bold;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.highest};
`;

export const WhoWeAreDescription = styled.p`
  color: ${({ theme }) => theme.text.light};
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.medium};
`;

export const FavoriteOffersTitle = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.medium};
`;

export const FavoriteOffersDescription = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: 3em 5em 2em;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 2.5em;
`;

export const PrincipalText = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.biggest};
`;

export const SubText = styled.p`
  font-size: ${({ theme }) => theme.fonts.highest};
`;
