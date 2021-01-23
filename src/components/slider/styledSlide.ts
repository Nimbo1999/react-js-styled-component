import styled, { css } from 'styled-components';

export const SlideShowContainer = styled.div`
    max-width: 100vw;
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 350px;
    
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        max-height: 500px;
    }
`;

export const SlideTitle = styled.h2`
    position: absolute;
    top: 0;
    margin: 8px 0px;
    padding: 0px 16px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`;

interface SlideItemIterface {
    active?: boolean
}

export const SlideItem = styled.div<SlideItemIterface>`
    display: ${({ active }) => active ? 'block' : 'none' };
    animation-name: fade;
    animation-duration: 1.5s;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }
`;

export const Text = styled.div`
    position: absolute;
    bottom: 0;
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px 22px;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);

    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md} ) {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 8px 12px 44px;
    }
`;

interface SlideButtonInterface {
    right?: boolean
};

export const SlideButtons = styled.button<SlideButtonInterface>`
    position: absolute;
    appearance: none;
    cursor: pointer;
    top: 35%;
    width: auto;
    height: 25%;
    padding: 8px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 18px;
    border-radius: 0 10px 10px 0;
    user-select: none;
    transition: 0.6s ease;
    background-color: rgba(0, 0, 0, 0.4);
    border-color: rgba(0, 0, 0, 0.15);

    ${({ right }) => right && css`
        right: 0;
        border-radius: 10px 0 0 10px;
    `}

    &:focus {
        outline: none;
    }

    &:active {
        width: 2em;
    }

    i {
        font-size: 24px
    }

    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 16px;
        background-color: transparent;
        border-color: transparent;

        ${SlideShowContainer}:hover & {
            background-color: rgba(0,0,0,0.4);
            border-color: rgba(0, 0, 0, 0.15);
        }

        i {
            font-size: 28px
        }
    }
`;

export const DotsContainer = styled.div`
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%
`;

export const Dot = styled.span<SlideItemIterface>`
    cursor: pointer;
    height: 20px;
    width: 30px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 1px;
    display: inline-block;
    transition: background-color 200ms ease, max-height 200ms ease,
    border-radius 200ms ease, width 200ms ease;
    max-height: 5px;

    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md}) {
        &:hover {
            background-color: #717171;
            max-height: 5px;
            border-radius: 3px;
            width: 20px;
        }
    }

    ${({ active }) => active && css`
        background-color: ${({ theme }) => theme.colors.white};
        max-height: 5px;
        border-radius: 3px;
        width: 40px;
    `}
`;