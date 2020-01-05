import React, { Component } from 'react'
import styled from 'styled-components'

import device from '../assets/breakpoints'

import { MAIN } from '../components/sections'
import Hero from '../components/layout/Hero'
import ResourceSection from '../components/ResourceSection'

import RESOURCE_LIST from '../resource-list'

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
                <Hero title="Resources. Because sharing is caring." />
                <WRAPPER>
                    <ResourceSection sectionTitle='Images' resourceCat={RESOURCE_LIST.images} />
                    <ResourceSection sectionTitle='Typography' resourceCat={RESOURCE_LIST.typography} />
                    <ResourceSection sectionTitle='Devlopment' resourceCat={RESOURCE_LIST.devlopment} />
                </WRAPPER>
            </MAIN>
        )
    }
}
