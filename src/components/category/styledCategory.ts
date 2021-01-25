import styled from 'styled-components';

export const CategoryContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 144px;
    border-radius: 6px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);

    h5 {
        color: ${({ theme }) => theme.colors.white};
    }
`;