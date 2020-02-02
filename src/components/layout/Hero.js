import React, { Component } from 'react'
import styled from 'styled-components'
import device from '../../assets/breakpoints'

import { H1, P } from '../typography'

const HERO = styled.header`
    min-height: 100vh;
    width: ${props => props.theme.defaultWidth};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media ${device.tabPort}{
        width: ${props => props.theme.mobileWidth};
        min-height: 60vh;
        margin: 3rem 0;
    } 

    @media ${device.phone} {
        margin: 3rem 0;
    }
`;

const INTRO = styled(P)`
    width: 60%;
    margin-top: 3rem;
    columns: 2;
    column-gap: 1rem;

    @media ${device.tabPort}{
        columns: 1;
    } 

    @media ${device.phone} { 
       width: 100%;
       columns: 1;
    }
`;

const BUTTON_BOX = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4rem;

    @media ${device.phone} { 
      flex-direction: column;
      width: 100%;
    }
`;

const BUTTON = styled.a`
    color: ${props => props.theme.primaryColor};
    border: 1px solid ${props => props.theme.primaryColor};
    background: transparent;
    text-align: center;
    text-decoration: none;

    font-size: 1.6rem;
    font-family: ${props => props.theme.titleFont};
    margin-right: 2rem;
    padding: 1.3rem 5rem;
    border-radius: 2.6rem;

    @media ${device.phone} { 
        margin-top: 2rem;
        margin-right: 0;
    }

    &:hover{
        color: ${props => props.theme.secondaryColor};
        background: ${props => props.theme.primaryColor};
    } 
`;


export default class Hero extends Component {
    render() {
        return (
            <HERO>
                <H1>{this.props.title}</H1>
                <INTRO>I am newly graduate, and just till recently lecturer, in Graphic Arts. Born back in 1996, I’ve always loved expressing my creative sides. From having rather good success in creating objects for The Sims to doing. My desire is to always design by genuine
research and for the target audience. I
believe that the best design comes from
understanding what the problem is and for
who I am designing for. </INTRO>
                <BUTTON_BOX>
                    <BUTTON href="https://github.com/dtangerfors/">View my GitHub</BUTTON>
                    <BUTTON href="mailto:daniel@dtangerfors.se">Contact me</BUTTON>
                </BUTTON_BOX>
            </HERO>
        )
    }
}
