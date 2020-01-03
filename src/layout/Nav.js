import React, { Component } from 'react'
import logo from '../assets/logo.svg'

import styled from 'styled-components';

import device from '../assets/breakpoints'

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
        width: calc(100% - 4rem);
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

    @media ${device.phone} { 
        width: calc(100% - 8rem);
        height: auto;
        border-top: none;
        overflow: scroll;
        margin-top: 0;
    }
`;

const NAV__LINK = styled.li`
    font-family: ${props => props.theme.titleFont};
    font-size: ${props => props.theme.defaultFontSize};
    color: ${props => props.theme.primaryColor};
    margin-left: 3rem;

    &:first-child {
        margin-left: 5rem;

        @media ${device.phone} { 
        margin-left: 3rem;
    }
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

export default class Nav extends Component {
    render() {
        return (
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
                <NAV__NAME_BOX>
                    <NAV_NAME>Daniel Tängerfors</NAV_NAME>
                </NAV__NAME_BOX>
            </NAV>
        )
    }
}
