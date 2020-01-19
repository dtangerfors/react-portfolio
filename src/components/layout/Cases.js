import React, { Component } from 'react'
import styled from 'styled-components'
import device from '../../assets/breakpoints'


import { H2, H4 } from '../typography'

import cases from '../../cases'

const CASE_SECTION = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: ${props => props.theme.defaultWidth};

    @media ${device.phone} { 
       width: ${props => props.theme.mobileWidth};
    }
`;

const CASE_ARTICLE = styled.article`
    width: ${props => props.bigDisplay ? "100%" : "calc(50% - 1rem)"};
    padding: 2rem;
    margin-bottom: 3rem;
    cursor: pointer;

    border: 1px solid ${props => props.theme.primaryColor};
    
    &:hover {
        box-shadow: .5rem .5rem 0 0 ${props => props.theme.primaryColor};
        transform: translateY(-.5rem) translateX(-.5rem);
    }

    @media ${device.phone} { 
       width: 100%;
    }
`;

const CASE__INFO = styled.div`
    margin-bottom: 2rem;
`;

const CASE__TITLE = styled(H2)`
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.primaryColor};

`;

const CASE__IMG = styled.img`
    width: 100%;
    line-height: 0;
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
                            <CASE__TITLE>{item.title}</CASE__TITLE>
                            <H4>{item.subTitle}</H4>
                        </CASE__INFO>
                        <CASE__IMG src={item.preview} alt={item.title}></CASE__IMG>
                    </CASE_ARTICLE>
                )}
            </CASE_SECTION>
        )
    }
}

/* export default class Cases extends Component {
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
 */