import React, { Component } from 'react'
import styled from 'styled-components'

import device from '../assets/breakpoints'

import { H2 } from './typography'
import ResourceCard from './ResourceCard'

const SECTION = styled.section`
    width: 50%;
    margin-bottom: 10rem;

    &:nth-child(odd) {
        padding-right: 1rem;
    }

    &:nth-child(even) {
        padding-left: 1rem;
    }

    @media ${device.phone} { 
       width: 100%;

        &:nth-child(odd) {
            padding-right: 0;
        }

        &:nth-child(even) {
            padding-left: 0;
        }
    }
`;

const SECTION__TITLE = styled(H2)`
    padding-bottom: .5rem;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
`;

const SECTION__HEADER = styled.header`
margin-bottom: 4rem;
`;

export default class ResourceSection extends Component {
    render() {
        return (
            <SECTION>
                <SECTION__HEADER>
                    <SECTION__TITLE>{this.props.sectionTitle}</SECTION__TITLE>
                </SECTION__HEADER>
                <ResourceCard resourceCat={this.props.resourceCat} />

            </SECTION>
        )
    }
}
