import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';

import theme from '../assets/theme'

import H1 from '../components/headings'

const HERO = styled.header`
    margin: 5rem 0;
`;

export default class Hero extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <HERO>
                    <H1>Frontend Developer.</H1>
                </HERO>
            </ThemeProvider>
        )
    }
}
