import styled from 'styled-components';

export const CommentaryContainer = styled.div`
    background-color: #E8F0F8;
    border-radius: 8px;
    padding: 12px 10px;
    margin: 16px 0px;
    border: 2px solid #d6dbe0;
`;

export const CommentaryText = styled.p`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary}
`;

export const CommentaryOwner = styled.small`
    flex: 1;
    text-align: end;
    font-style: italic;
`;