import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggledone }) => toggledone && css`
        background: hsl(120, 61%, 34%);
    `}

    ${({ remove }) => remove && css`
        background: hsl(348, 83%, 47%);
    `}

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    } 
`;