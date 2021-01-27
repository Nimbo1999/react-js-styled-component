import styled from 'styled-components';

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 61px;

    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-top: 0px;
    }
`;