import React, { Component } from 'react'
import styled from 'styled-components'

import device from '../assets/breakpoints'

import { H3, P, EXTERNAL_LINK } from './typography';

const RESOURCE__GROUP = styled.div`
    width: 50%;
    padding-right: 1rem;

    @media ${device.phone} { 
       width: 100%;
    }
`;

const RESOURCE__ARTICLE = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const STYLED_P = styled(P)`
    margin: 1rem 0 3rem;
`;

export default class ResourceCard extends Component {
    render() {
        return (
            <RESOURCE__ARTICLE>
                {this.props.resourceCat.map(resource =>
                    <RESOURCE__GROUP key={resource.title}>
                        <H3>
                            <EXTERNAL_LINK href={resource.url} target="_blank">{resource.title}</EXTERNAL_LINK>
                        </H3>
                        <STYLED_P>{resource.desc}</STYLED_P>
                    </RESOURCE__GROUP>
                )}
            </RESOURCE__ARTICLE>
        )
    }
}
