import styled from 'styled-components';

export const CardContainer = styled.div`
    max-height: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

interface imageDivProps {
    image: string,
}

export const ImageDiv = styled.div<imageDivProps>`
    flex: 4;
`;

export const PartnerTitle = styled.span`
    flex: 1;
`;