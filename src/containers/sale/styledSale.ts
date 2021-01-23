import styled from 'styled-components';

export const SaleWrapper = styled.div`
    margin: 16px auto;
    padding-top: 16px;
    padding-bottom: 16px;
    overflow: hidden;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.sourceSansProFont};
    font-weight: bold;
    margin-bottom: 0.5em;
    position: relative;

    &::after {
        content: '';
        width: 30%;
        border-bottom: 1px solid #A7B6C5;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

export const HorizontalScroll = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: none;
`;