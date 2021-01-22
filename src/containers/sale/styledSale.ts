import styled from 'styled-components';

export const SaleWrapper = styled.div`
    margin: 16px 0px;
    padding-top: 16px;
    padding-bottom: 16px;
    overflow: hidden;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
`;
