import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px){
        grid-template-columns: 1fr;
        }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.4s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }
    &:active {
        filter: brightness(120%);
    }
`;

