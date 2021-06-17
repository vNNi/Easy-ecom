import styled from 'styled-components';

export const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
