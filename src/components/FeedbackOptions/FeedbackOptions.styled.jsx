import styled from '@emotion/styled';

export const Reaction = styled.div`
    display: flex;
    gap: 15px;
`;

export const Button = styled.button`
    padding: 10px;
    height: 40px;
    width: 100px;
    font-size: 22px;
    font-weight: bold;
    text-transform: capitalize;
    border: 1px solid grey;
    border-radius: 5px;
    outline: none;
    text-align: center;
    transition: transform 250ms linear;
    cursor: pointer;


    &:hover {
    transform: scale(1.1);
    background-color: brown;
    color: white;
    }
    :active {
    background-color: brown;
    color: white;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
`;