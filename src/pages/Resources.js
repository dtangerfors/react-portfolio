import React, { Component } from 'react'
import styled from 'styled-components'

import device from '../assets/breakpoints'

import { MAIN } from '../components/sections'
// eslint-disable-next-line
import { H1, P } from '../components/typography'
import ResourceSection from '../components/ResourceSection'

import RESOURCE_LIST from '../resource-list'
// eslint-disable-next-line
import illustration from '../assets/sharing-caring.svg'

const HERO = styled.header`
    height: 100vh;
    width: ${props => props.theme.defaultWidth};
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const WRAPPER = styled.div`
    width: ${props => props.theme.defaultWidth};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media ${device.phone} { 
        width: ${props => props.theme.mobileWidth};
    }
`;

export default class Resources extends Component {
    render() {
        return (
            <MAIN>
                <HERO>
                    <H1>Resources. Because sharing is caring.</H1>
                </HERO>
                <WRAPPER>
                    <ResourceSection sectionTitle='Inspiration' resourceCat={RESOURCE_LIST.inspiration} />
                    <ResourceSection sectionTitle='Development' resourceCat={RESOURCE_LIST.devlopment} />
                    <ResourceSection sectionTitle='Images' resourceCat={RESOURCE_LIST.images} />
                    <ResourceSection sectionTitle='Typography' resourceCat={RESOURCE_LIST.typography} />
                </WRAPPER>
            </MAIN>
        )
    }
}

