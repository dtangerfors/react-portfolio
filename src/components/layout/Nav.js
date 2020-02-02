import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import styled from 'styled-components'

import device from '../../assets/breakpoints'

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

export const NAV__LOGO_BOX = styled.div`
    width: 5rem;
    height: 5rem;
    border-right: 1px solid ${props => props.theme.primaryColor};

    @media ${device.phone} { 
        width: 5rem;
    }
`;

export const NAV__LOGO = styled.img`
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

export const NAV__LINK = styled(NavLink)`
    font-family: ${props => props.theme.titleFont};
    font-size: ${props => props.theme.defaultFontSize};
    color: ${props => props.theme.primaryColor};
    text-decoration: none;

    margin-top: ${props => props.footer ? '1.5rem' : 0};

    &:hover {
        text-decoration: underline;
    }
`;

const NAV__NAME_BOX = styled.div`
    border-left: 1px solid ${props => props.theme.primaryColor};
    display: flex;
    align-items: center;
    right: 0;
    position: absolute;
    height: 5rem;

    @media ${device.lessThan1000} { 
        display: none;
    }
`;

const NAV_NAME = styled.span`
    margin: 0 2rem;

    font-family: ${props => props.theme.titleFont};
    font-size: 2.5rem;

    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
`;

// NAV STYLING – MOBILE


export default class Nav extends Component {
    render() {

        const isMobile = window.orientation > -1;

        if (!isMobile) {
            return (
                <NAV>
                    <NAV__LOGO_BOX>
                        <NAV__LINK to="/">
                            <NAV__LOGO src={logo} alt="Dtangerfors" />
                        </NAV__LINK>
                    </NAV__LOGO_BOX>
                    <NAV__LINK_BOX>
                        <NAV__LIST_ITEM>
                            <NAV__LINK to="/resources">Resources</NAV__LINK>
                        </NAV__LIST_ITEM>
                        <NAV__LIST_ITEM><NAV__LINK to="/about">About me</NAV__LINK></NAV__LIST_ITEM>
                    </NAV__LINK_BOX>
                    <NAV__NAME_BOX>
                        <NAV_NAME>Daniel Tängerfors</NAV_NAME>
                    </NAV__NAME_BOX>
                </NAV>
            )
        } else {
            return (null)
        }
    }
}

