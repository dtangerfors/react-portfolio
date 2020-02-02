import React, { Component } from 'react'
import styled from 'styled-components'
import device from '../../assets/breakpoints'


import { H2, H4 } from '../typography'

import cases from '../../cases'

const CASE_SECTION = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 1rem;

    @media ${device.phone} { 
        width: ${props => props.theme.mobileWidth};
        padding: 0;
    }
`;

const CASE_ARTICLE = styled.article`
    width: ${props => props.bigDisplay ? "100%" : "calc(50% - 1rem)"};
    padding: 1rem;
    margin: 0 .5rem 3rem;
    
    /* &:hover {
        box-shadow: .5rem .5rem 0 0 ${props => props.theme.primaryColor};
        transform: translateY(-.5rem) translateX(-.5rem);
    } */

    @media ${device.phone} { 
       width: 100%;
       padding: 0;
       margin: 0 0 3rem;
    }
`;

const CASE__INFO = styled.div`
    margin-bottom: 2rem;
`;

const LINK = styled.a`
    text-decoration: none;

    &:visited {
        color: ${props => props.theme.primaryColor};
    } 
`;

const CASE__TITLE = styled(H2)`
    padding: 2rem 0 1rem;
    margin: 1rem 0;
    border-top: 1px solid ${props => props.theme.primaryColor};
    border-bottom: 1px solid ${props => props.theme.primaryColor};

    @media ${device.tabPort} { 
        padding-bottom: .5rem;
        margin-bottom: .5rem;
    }

`;

const CASE__IMG = styled.img`
    width: 100%;
    line-height: 0;

    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme.primaryColor};


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
                            <CASE__TITLE><LINK className="arrow" href={item.url}>{item.title}</LINK></CASE__TITLE>
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