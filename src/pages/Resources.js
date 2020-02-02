import React, { Component } from 'react'
import styled from 'styled-components'

import device from '../assets/breakpoints'

import { MAIN } from '../components/sections'

import { H1, P } from '../components/typography'
import ResourceSection from '../components/ResourceSection'

import RESOURCE_LIST from '../resource-list'

const HERO = styled.header`
    height: 100vh;
    width: ${props => props.theme.defaultWidth};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media ${device.tabPort} {
        height: 50vh;
        width: ${props => props.theme.mobileWidth};
    }
`;

const WRAPPER = styled.div`
    width: ${props => props.theme.defaultWidth};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media ${device.tabPort} { 
        width: ${props => props.theme.mobileWidth};
    }
`;

const LEAD = styled(P)`
    width: 50%;
`;

export default class Resources extends Component {
    render() {
        return (
            <MAIN>
                <HERO>
                    <H1>Resources. Because sharing is caring.</H1>
                    <LEAD>I love learning new things; finding new sources for inspiration and through endless hours of scrolling I’ve found several sources of learning and inspiration. Here on this page you’ll find what inspires and brightens me, whether it’s for coding, designing or just fun stuff. </LEAD>
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

