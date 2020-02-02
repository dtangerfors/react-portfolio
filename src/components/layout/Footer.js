import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import device from '../../assets/breakpoints'

import { H3, EXTERNAL_LINK, P } from '../typography'
import { NAV__LINK } from './Nav'

import logo from '../../assets/logo.svg'

const FOOTER = styled.footer`
    display: flex;
    flex-direction: row;
    position: relative;

    width: ${props => props.theme.defaultWidth};
    border: 1px solid ${props => props.theme.primaryColor};
    border-bottom: none;
    background: ${props => props.theme.secondaryColor};

    padding: 8rem;

    overflow: hidden;

    @media ${device.phone} { 
        width: ${props => props.theme.mobileWidth};
        flex-direction: column;
        padding-left: 2rem;
    }
`;

const FOOTER__COLUMN = styled.div`
    margin-right: 8rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;

    font-size: ${props => props.theme.defaultFontSize};

    @media ${device.phone} {
        margin-right: 0;
        margin-bottom: 8rem;
    }
`

const FOOTER__NOTICE = styled(P)`
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

const FOOTER__LOGO = styled.img`
    width: 20rem;
    position: absolute;
    top: -4rem;
    right: -4rem;
    align-self: center;

    animation: ${rotate} 20s linear infinite;
`;


export default class Footer extends Component {
    render() {
        return (
            <FOOTER>
                <FOOTER__COLUMN>
                    <H3>Get social</H3>
                    <EXTERNAL_LINK footer underline href="https://www.behance.net/dtangerfors">Behance</EXTERNAL_LINK>
                    <EXTERNAL_LINK footer underline href="https://github.com/dtangerfors">Github</EXTERNAL_LINK>
                    <EXTERNAL_LINK footer underline href="https://www.linkedin.com/in/daniel-t%C3%A4ngerfors/">LinkedIn</EXTERNAL_LINK>
                </FOOTER__COLUMN>
                <FOOTER__COLUMN>
                    <H3>Good stuff</H3>
                    <NAV__LINK footer to="/resources">About me</NAV__LINK>
                    <NAV__LINK footer to="/resources">Resources</NAV__LINK>
                </FOOTER__COLUMN>
                <FOOTER__LOGO src={logo} alt="Dtangerfors" />
                <FOOTER__NOTICE>(C) Daniel Tängerfors 2020. This site was made using React.js.</FOOTER__NOTICE>
            </FOOTER>
        )
    }
}
