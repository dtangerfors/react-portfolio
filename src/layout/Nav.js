import React, { Component } from 'react'
import logo from '../assets/logo.svg'

import styled, { ThemeProvider } from 'styled-components';

import theme from '../assets/theme'

const NAV = styled.nav`
    width: 85vw;

    display: flex;
    flex-direction: row;

    border: 1px solid ${props => props.theme.primaryColor};
    border-top: none;

    position: relative;
`;

const NAV__LOGO_BOX = styled.div`
    width: 15rem;
    border-right: 1px solid ${props => props.theme.primaryColor};
`;

const NAV__LOGO = styled.img`
    width: 100%;
    padding: 2.5rem;
    box-sizing: border-box;
    color: ${props => props.theme.primaryColor};
    fill: currentColor;
`;

const NAV__LINK_BOX = styled.ul`
    width: 60%;
    height: 10rem;
    position: absolute;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-top: 1px solid ${props => props.theme.primaryColor};

    bottom: 0;
    left: 15rem; 
    margin: 0;
    padding: 0;

    list-style-type: none;
`;

const NAV__LINK = styled.li`
    font-family: ${props => props.theme.titleFont};
    font-size: ${props => props.theme.defaultFontSize};
    color: ${props => props.theme.primaryColor};
    margin-left: 3rem;

    &:first-child {
        margin-left: 5rem;
    }
`;


export default class Nav extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <NAV>
                    <NAV__LOGO_BOX>
                        <NAV__LOGO src={logo} alt="Dtangerfors" />
                    </NAV__LOGO_BOX>
                    <NAV__LINK_BOX>
                        <NAV__LINK>Frontend</NAV__LINK>
                        <NAV__LINK>Design</NAV__LINK>
                        <NAV__LINK>Resources</NAV__LINK>
                        <NAV__LINK>About</NAV__LINK>
                        <NAV__LINK>Contact</NAV__LINK>
                    </NAV__LINK_BOX>
                </NAV>
            </ThemeProvider>
        )
    }
}
