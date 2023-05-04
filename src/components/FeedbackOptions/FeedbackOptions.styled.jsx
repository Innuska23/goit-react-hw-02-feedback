import styled from '@emotion/styled';

export const Reaction = styled.div`
    display: flex;
    gap: 15px;
`;

export const Button = styled.button`
    background: hsl(340deg 100% 32%);
    border-radius: 12px;
    width: 150px;
    text-transform: capitalize;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    &:active {
        Span {
        transform: translateY(-2px);
    }
    }
`;

export const Span= styled.span`
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    background: hsl(345deg 100% 47%);
    color: white;
    transform: translateY(-6px);
`;