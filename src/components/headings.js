import styled from 'styled-components';



const H1 = styled.h1`
    font-size: 7rem;
    font-family: ${props => props.theme.titleFont};
    font-weight: 400;
    color: ${props => props.theme.primaryColor};
`;


export default H1;