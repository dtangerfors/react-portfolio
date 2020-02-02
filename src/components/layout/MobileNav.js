import React, { Component } from 'react'

import { H3, EXTERNAL_LINK, P } from '../typography'

import logo from '../../assets/logo.svg'

import styled, { keyframes } from 'styled-components'
import theme from '../../assets/theme';

import {
    NAV__LINK,
    NAV__LOGO,
    NAV__LOGO_BOX
} from '../layout/Nav'

import HamburgerMenu from 'react-hamburger-menu';


import device from '../../assets/breakpoints'



const NAV = styled.div`

    flex-direction: column;
    position: relative;

    width: 100%;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
    background: ${props => props.theme.secondaryColor};

    padding: 4rem;
    padding-left: 2rem;

    overflow: hidden; 
`;

const NAV__COLUMN = styled.div`
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;

    font-size: ${props => props.theme.defaultFontSize};

`;

const NAV__NOTICE = styled(P)`
    position: absolute;
    bottom: 2rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const NAV_ROTATE__LOGO = styled.img`
    width: 20rem;
    position: absolute;
    top: -4rem;
    right: -4rem;
    align-self: center;

    animation: ${rotate} 20s linear infinite;

    @media ${device.phone} {
        top: -4rem;
    }
`;

const MOBILE_NAV_WRAPPER = styled.nav`
    width: ${props => props.theme.mobileWidth};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;

    border: 1px solid ${props => props.theme.primaryColor};
    border-bottom: none;
    background: ${props => props.theme.secondaryColor};

    position: fixed;
    bottom: 0;
    z-index: 10;
`;

const HAMBURGER__WRAPPER = styled.div`
    margin-right:2rem;
    align-self: center;
`;

const MOBILE_NAV__LINK = styled(NAV__LINK)`
    margin-top: 1rem;
`;

export default class MobileNav extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {

        let displayMenu = 'menu';
        if (this.state.open) {
            displayMenu += ' opened';
        }

        return (
            <MOBILE_NAV_WRAPPER>
                <NAV className={displayMenu}>
                    <NAV__COLUMN>
                        <H3>Good stuff</H3>
                        <MOBILE_NAV__LINK to="/about">About me</MOBILE_NAV__LINK>
                        <MOBILE_NAV__LINK to="/resources">Resources</MOBILE_NAV__LINK>
                    </NAV__COLUMN>
                    <NAV__COLUMN>
                        <H3>Get social</H3>
                        <EXTERNAL_LINK footer underline href="https://www.behance.net/dtangerfors">Behance</EXTERNAL_LINK>
                        <EXTERNAL_LINK footer underline href="https://github.com/dtangerfors">Github</EXTERNAL_LINK>
                        <EXTERNAL_LINK footer underline href="https://www.linkedin.com/in/daniel-t%C3%A4ngerfors/">LinkedIn</EXTERNAL_LINK>
                    </NAV__COLUMN>
                    <NAV_ROTATE__LOGO src={logo} alt="Dtangerfors" />
                    <NAV__NOTICE>(C) Daniel Tängerfors 2020. This site was made using React.js.</NAV__NOTICE>
                </NAV>
                <NAV__LOGO_BOX>
                    <NAV__LINK to="/">
                        <NAV__LOGO src={logo} alt="Dtangerfors" />
                    </NAV__LINK>
                </NAV__LOGO_BOX>
                <HAMBURGER__WRAPPER>
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={30}
                        height={20}
                        strokeWidth={1}
                        color={theme.primaryColor}
                        animationDuration={0.5}
                    />
                </HAMBURGER__WRAPPER>
            </MOBILE_NAV_WRAPPER>
        );
    }
}