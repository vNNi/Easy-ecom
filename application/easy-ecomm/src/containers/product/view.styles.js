import styled from 'styled-components';

export const FreightLabel = styled.p`
  font-weight: bold;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fonts.highest};
`;

export const ShippingPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fonts.medium};
`;

export const ShippingDays = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;
