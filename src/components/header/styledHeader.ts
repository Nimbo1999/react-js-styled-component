import styled, { css } from 'styled-components';

type NavigationMenuPropTypes = {
    height?: number
}

type MobileNavigationMenuPropTypes = {
    expanded: boolean
}

export const StyledHeader = styled.div``;

export const Navigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px;
    position: relative;
    
    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md} ) {
        padding: 0px 24px;
    }
`;

export const DivTitleWrapper = styled.div`
    flex: 1;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    margin: 0px;
    width: fit-content;
    white-space: nowrap;
`;

export const NavigationMenu = styled.ul<NavigationMenuPropTypes>`
    display: none;
    justify-content: flex-end;
    flex: 2;
    list-style: none;
    height: 68px;
    margin: 0px;
    padding: 0px 24px;

    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md} ) {
        display: flex;
    }

`;

export const MenuItem = styled.li`
    display: flex;
    margin: 0px 8px;
    padding: 0px 8px;
    align-items: center;
    cursor: pointer;
    height: 100%;
    transition: background-color 150ms ease-in;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    span {
        color: white;
        text-transform: uppercase;
        font-size: 14px;
    }
`;

export const MobileNavigationMenu = styled(NavigationMenu)<MobileNavigationMenuPropTypes>`
    position: absolute;
    top: 100%;
    display: inline-block;
    height: fit-content;
    width: 100%;
    background-color: #3e3e3e;
    max-height: ${({ expanded }) => expanded ? '1000px' : '0px' };
    transition: max-height 200ms ease-in-out;
    overflow: hidden;
    padding: 0px;

    ${({ expanded }) => expanded && css`
        span {
            display: flex !important;
        }
    `}

    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md} ) {
        display: none;
    }

`;

export const MobileMenuItem = styled(MenuItem)`
    height: 50px;
    padding: 0px 24px;
    margin: 0;
`;

export const HamburgerButton = styled.button`
    display: inline-block;
    appearance: none;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    padding: 0px 16px;
    transition: color 150ms ease-in;

    &:hover {
        color: #c5c5c5;
    }

    &:focus {
        outline: none;
    }

    @media screen and ( min-width: ${({ theme }) => theme.breakpoints.md} ) {
        display: none;
    }
`;