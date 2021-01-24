import styled from 'styled-components';

export const TitleH1 = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.sourceSansProFont};
    font-weight: bold;
    margin-bottom: 0.5em;
    width: fit-content;
    position: relative;

    &::after {
        content: '';
        width: 60%;
        border-bottom: 1px solid #A7B6C5;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

export const TitleH2 = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.sourceSansProFont};
    font-weight: bold;
    margin-bottom: 0.5em;
    width: fit-content;
    position: relative;

    &::after {
        content: '';
        width: 60%;
        border-bottom: 1px solid #A7B6C5;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

export const TitleH3 = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.sourceSansProFont};
    font-weight: bold;
    margin-bottom: 0.5em;
    width: fit-content;
    position: relative;

    &::after {
        content: '';
        width: 60%;
        border-bottom: 1px solid #A7B6C5;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

export const TitleH4 = styled.h4`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.sourceSansProFont};
    font-weight: bold;
    margin-bottom: 0.5em;
    width: fit-content;
    position: relative;

    &::after {
        content: '';
        width: 60%;
        border-bottom: 1px solid #A7B6C5;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;
