import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background: white;
`;

export const Header = styled.header`
    padding: 20px;
    border-bottom: 1px solid #ccc;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const Body = styled.div`
    padding: 20px;
`;