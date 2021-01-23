import styled from 'styled-components';

export const ProductCellWrapper = styled.div`
    background-color: #E8F0F8;
    flex: 1 0 260px;
    max-width: 260px;
    margin-left: 16px;

    &:first-child {
        margin-left: 0px;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: .5em;
    align-items: center;
    padding: 0px 12px;
    width: 100%;
`;

export const CurrentPrice = styled.span`
    margin-right: 8px;
    font-weight: bold;
    font-size: 16px;
`;

export const LastPrice = styled.span`
    font-size: 14px;
    text-decoration: line-through;
`;

export const PName = styled.p`
    padding: 8px 12px;
    margin: 0px;

`;

export const PDescription = styled.small`
    padding: 0px 12px 12px;
    display: ${({ children }) => children ? 'block' : 'none'}

`;

export const Img = styled.img`
    width: 100%;
`;