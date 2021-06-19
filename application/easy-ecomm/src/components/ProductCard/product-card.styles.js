import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5em;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.outerBlack};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    font-size: ${({ theme }) => theme.fonts.medium};
  }

  &:hover {
    span {
      font-size: ${({ theme }) => theme.fonts.tall};
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 0.5em 0;
  color: ${({ theme }) => theme.text.base};
  font-size: ${({ theme }) => theme.fonts.regular};
`;

export const InfosContainer = styled.div`
  padding: 0 1em;
`;

export const InStockLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.text.base};
`;

export const StockValue = styled.span`
  color: ${({ theme }) => theme.text.light};
  background-color: ${({ theme }) => theme.colors.third};
  padding: 2px 10px;
  border-radius: 20%;
  text-align: center;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
  margin: 0.5em 0;
`;
