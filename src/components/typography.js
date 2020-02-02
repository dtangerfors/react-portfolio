import styled from 'styled-components'

import device from '../assets/breakpoints'

export const H1 = styled.h1`
    font-size: 7rem;
    line-height: 1.3em;
    font-family: ${props => props.theme.titleFont};
    font-weight: 400;
    color: ${props => props.theme.primaryColor};

    @media ${device.tabPort} { 
        font-size: 5rem;
    }
`;

export const H2 = styled.h2`
    font-size: 4.5rem;
    line-height: 1.3em;
    font-family: ${props => props.theme.titleFont};
    font-weight: 400;
    color: ${props => props.theme.primaryColor};

    @media ${device.tabPort} { 
        font-size: 3rem;
    }
`;

export const H3 = styled.h3`
    font-size: 2.5rem;
    line-height: 1.3em;
    font-family: ${props => props.theme.titleFont};
    font-weight: 400;
    color: ${props => props.theme.primaryColor};
`;

export const H4 = styled.h4`
    font-size: ${props => props.theme.defaultFontSize};
    line-height: 1.3em;
    font-family: ${props => props.theme.bodyFont};
    font-weight: 400;
    color: ${props => props.theme.primaryColor};
`;

export const A = styled.a`
    font-family: ${props => props.theme.titleFont};
    font-weight: 400;
    font-size: inherit;
    color: ${props => props.theme.primaryColor};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};

    margin-top: ${props => props.footer ? '1.5rem' : 0};

    &:hover {
        text-decoration: ${props => props.underline ? 'none' : 'underline'};
    }
`;

export const EXTERNAL_LINK = styled(A)`
    &::after {
        content: ' \u2197';
        text-decoration: none;
        display: inline-block;
        margin-left: 5px;
    }
`;

export const P = styled.p`
    font-size: ${props => props.theme.defaultFontSize};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 400;
    color: ${props => props.theme.primaryColor};
`;


