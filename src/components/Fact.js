import React, { Component } from 'react'
import styled from 'styled-components'
import device from '../assets/breakpoints'

import { H4 } from './typography'

const URL = 'https://uselessfacts.jsph.pl/random.json?language=en';


const FACT_SECTION = styled.div`
    width: 100vw;
    padding: 20rem 0;
    background-color: ${props => props.theme.primaryColor};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const FACT_WRAPPER = styled.div`
    width: 100%;
    max-width: ${props => props.theme.defaultWidth};

    @media ${device.phone}{
        max-width: ${props => props.theme.mobileWidth};
    }
`;

const FACT_LEAD = styled(H4)`
    color: ${props => props.theme.secondaryColor};
    margin-bottom: 2rem;
`;

const FACT = styled.p`
    font-family: ${props => props.theme.titleFont};
    font-size: 3rem;
    color: ${props => props.theme.secondaryColor};
`;

export default class Fact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            facts: ''
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        facts: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, facts } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <FACT_SECTION>
                    <FACT_WRAPPER>
                        <FACT_LEAD>I don't know about you, but I know about me – I love useless facts so here you go.</FACT_LEAD>
                        <FACT>{facts.text}</FACT>
                    </FACT_WRAPPER>
                </FACT_SECTION>

            );
        }
    }
}