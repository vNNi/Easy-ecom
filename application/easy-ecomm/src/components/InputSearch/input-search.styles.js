import styled from 'styled-components';

export const Container = styled.div`
  .ant-btn-primary {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
