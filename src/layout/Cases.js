import React, { Component } from 'react'
import styled from 'styled-components'
import device from '../assets/breakpoints'


import { H2, H4 } from '../components/typography'

import cases from '../cases'

const CASE_SECTION = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 1rem;
`;

const CASE_ARTICLE = styled.article`
    width: ${props => props.bigDisplay ? "100%" : "50%"};
    padding: 0 1rem;

    @media ${device.phone} { 
       width: 100%;
    }

    
`;

const CASE__INFO = styled.div`
    margin-bottom: 1rem;
    margin-top: 2rem;
`;

const CASE__IMG = styled.img`
    width: 100%;
    filter: grayscale(100%);

    &:hover {
        filter: none;
    }
`;

export default class Cases extends Component {
    render() {
        return (
            <CASE_SECTION>
                {cases.map(item =>
                    <CASE_ARTICLE bigDisplay={item.bigDisplay} key={item.id}>
                        <CASE__INFO>
                            <H2>{item.title}</H2>
                            <H4>{item.subTitle}</H4>
                        </CASE__INFO>
                        <CASE__IMG src={item.preview} alt={item.title}></CASE__IMG>
                    </CASE_ARTICLE>
                )}
            </CASE_SECTION>
        )
    }
}
