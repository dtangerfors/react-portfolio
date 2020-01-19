import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

import styled from 'styled-components';
import theme from '../../assets/theme';

import device from '../../assets/breakpoints'
import HamburgerMenu from 'react-hamburger-menu';

// NAV STYLING – DESKTOP 

const NAV = styled.nav`
    width: ${props => props.theme.defaultWidth};

    display: flex;
    flex-direction: row;

    border: 1px solid ${props => props.theme.primaryColor};
    border-top: none;
    background: ${props => props.theme.secondaryColor};

    position: fixed;
    z-index: 10;

    @media ${device.phone} { 
        width: ${props => props.theme.mobileWidth};
    }
`;

const NAV__LOGO_BOX = styled.div`
    width: 5rem;
    height: 5rem;
    border-right: 1px solid ${props => props.theme.primaryColor};

    @media ${device.phone} { 
        width: 5rem;
    }
`;

const NAV__LOGO = styled.img`
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    color: ${props => props.theme.primaryColor};
    transition: transform 1s ease;

    &:hover {
        transform: rotate(360deg);
        transition: transform 2s ease;
    }

    @media ${device.phone} { 
        padding: 1rem;
    }
`;

const NAV__LINK_BOX = styled.ul`
    width: 60%;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 0;
    padding: 0;

    list-style-type: none;

`;

const NAV__LIST_ITEM = styled.li`
    margin-left: 3rem;

    &:first-child {
        margin-left: 5rem;

        @media ${device.phone} { 
        margin-left: 3rem;
        }
    }
`;

const NAV__LINK = styled(NavLink)`
    font-family: ${props => props.theme.titleFont};
    font-size: ${props => props.theme.defaultFontSize};
    color: ${props => props.theme.primaryColor};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const NAV__NAME_BOX = styled.div`
    border-left: 1px solid ${props => props.theme.primaryColor};
    display: flex;
    /* display: ${window.innerWidth < 1000 ? "none" : "flex"}; */
    align-items: center;
    right: 0;
    position: absolute;
    height: 5rem;

    @media ${device.lessThan1000} { 
        display: none;
    }
`;

const NAV_NAME = styled.span`
    font-family: ${props => props.theme.titleFont};
    font-size: 2.5rem;
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;

    margin: 0 2rem;
`;

// NAV STYLING – MOBILE

const MOBILE_NAV_WRAPPER = styled.nav`
    width: calc((${props => props.theme.mobileWidth}) - 4rem);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;

    border: 1px solid ${props => props.theme.primaryColor};
    background: ${props => props.theme.secondaryColor};

    position: fixed;
    bottom: 4rem;
    z-index: 10;
`;


const MOBILE__LINK_BOX = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    margin: 0;
    padding: 0;

    list-style-type: none;
`;

const MOBILE__LIST_ITEM = styled.li`
    width: 100%;
    padding: 2rem 3rem;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
`;

const MOBILE__LINK = styled(NavLink)`
    width: 100%;
    font-family: ${props => props.theme.titleFont};
    font-size: ${props => props.theme.defaultFontSize};
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    
`;

const HAMBURGER__WRAPPER = styled.div`
    margin-right:2rem;
    align-self: center;
`;

class NavDesktop extends Component {
    render() {
        return (
            <NAV>
                <NAV__LOGO_BOX>
                    <NAV__LINK to="/">
                        <NAV__LOGO src={logo} alt="Dtangerfors" />
                    </NAV__LINK>
                </NAV__LOGO_BOX>
                <NAV__LINK_BOX>
                    <NAV__LIST_ITEM><NAV__LINK to="/resources">Frontend</NAV__LINK></NAV__LIST_ITEM>
                    <NAV__LIST_ITEM><NAV__LINK to="/resources">Design</NAV__LINK></NAV__LIST_ITEM>
                    <NAV__LIST_ITEM>
                        <NAV__LINK to="/resources">Resources</NAV__LINK>
                    </NAV__LIST_ITEM>
                    <NAV__LIST_ITEM><NAV__LINK to="/about">About me</NAV__LINK></NAV__LIST_ITEM>
                    <NAV__LIST_ITEM><NAV__LINK to="/resources">Contact</NAV__LINK></NAV__LIST_ITEM>
                </NAV__LINK_BOX>
                <NAV__NAME_BOX>
                    <NAV_NAME>Daniel Tängerfors</NAV_NAME>
                </NAV__NAME_BOX>
            </NAV>
        )
    }
}

class NavMobile extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            hideOrShowHamburgerDropDown: 'nav'
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <MOBILE_NAV_WRAPPER>
                <MOBILE__LINK_BOX>
                    <MOBILE__LIST_ITEM><MOBILE__LINK to="/resources">Frontend</MOBILE__LINK></MOBILE__LIST_ITEM>
                    <MOBILE__LIST_ITEM><MOBILE__LINK to="/resources">Design</MOBILE__LINK></MOBILE__LIST_ITEM>
                    <MOBILE__LIST_ITEM>
                        <MOBILE__LINK to="/resources">Resources</MOBILE__LINK>
                    </MOBILE__LIST_ITEM>
                    <MOBILE__LIST_ITEM><MOBILE__LINK to="/about">About me</MOBILE__LINK></MOBILE__LIST_ITEM>
                    <MOBILE__LIST_ITEM><MOBILE__LINK to="/resources">Contact</MOBILE__LINK></MOBILE__LIST_ITEM>
                </MOBILE__LINK_BOX>
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

export default class Nav extends Component {

    render() {

        const isMobile = window.orientation > -1;

        if (isMobile) {
            return (
                <NavMobile />
            );
        } else {
            return (
                <NavDesktop />
            );
        }

    }
}

