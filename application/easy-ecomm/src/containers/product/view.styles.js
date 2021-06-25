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

export const ShippingError = styled.p`
  color: ${({ theme }) => theme.text.error};
`;

export const OrderSuccess = styled.h3`
  color: ${({ theme }) => theme.text.success};
  font-size: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
`;

export const OrderError = styled.h3`
  color: ${({ theme }) => theme.text.error};
  font-size: ${({ theme }) => theme.fonts.medium};
`;
