import styled, { css } from 'styled-components';

interface SmallProps {
    small?: boolean,
}

export const ProductCellWrapper = styled.div<SmallProps>`
    background-color: #E8F0F8;
    flex: 1 0 ${({ small }) => small ? `145px` : '260px' };
    max-width: ${({ small }) => small ? `145px` : '260px' };
    margin-left: 16px;

    &:first-child {
        margin-left: 0px;
    }
`;

interface InvertedInterface {
    inverted?: boolean,
}

export const Row = styled.div<InvertedInterface>`
    display: flex;
    justify-content: flex-start;
    margin-top: .5em;
    align-items: center;
    padding: 0px 12px;
    width: 100%;

    ${({ inverted }) => inverted && css`
        padding: 0px 6px 8px;
        margin-top: 0px;
    `}
`;

export const CurrentPrice = styled.span<InvertedInterface>`
    margin-right: 8px;
    font-weight: bold;
    font-size: 16px;

    ${({ inverted }) => inverted && css`
        font-size: 14px;
    `}
`;

export const LastPrice = styled.span`
    font-size: 14px;
    text-decoration: line-through;
`;

export const PName = styled.p<InvertedInterface>`
    padding: 8px 12px;
    margin: 0px;
    ${({ inverted }) => inverted && css`
        font-size: 14px;
        padding: 4px 6px;
    `}
`;

export const PDescription = styled.small`
    padding: 0px 12px 12px;
    display: ${({ children }) => children ? 'block' : 'none'};
`;

export const ImageDiv = styled.div<SmallProps>`
    max-height: ${({ small }) => small ? '145px' : '162px'};
    height: ${({ small }) => small ? '145px' : '162px'};
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;