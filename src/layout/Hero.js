import React, { Component } from 'react'
import styled from 'styled-components';

import { H1 } from '../components/typography'

const HERO = styled.header`
    height: 100vh;
    width: ${props => props.theme.defaultWidth};
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export default class Hero extends Component {
    render() {
        return (
            <HERO>
                <H1>Frontend Developer.<br />Designer.</H1>
            </HERO>
        )
    }
}
