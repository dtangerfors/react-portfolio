import React, { Component } from 'react'
import styled from 'styled-components';

import { MAIN } from '../components/sections';
import { H1 } from '../components/typography';

const ABOUT_HERO = styled.header`
    display: flex;
    flex-direction: row;
    margin-top: 10vh;
`;

const HERO_IMAGE_WRAP = styled.div`
    width: 40%;
    height: 80vh;
`;

const HERO_IMAGE = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const HERO_TITLE_WRAP = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class About extends Component {
    render() {
        return (
            <MAIN>
                <ABOUT_HERO>
                    <HERO_IMAGE_WRAP>
                        <HERO_IMAGE src="assets/img/190922-daniel-webb-1920.jpg" alt="Daniel Tängerfors" />
                    </HERO_IMAGE_WRAP>
                    <HERO_TITLE_WRAP>
                        <H1>About me</H1>
                    </HERO_TITLE_WRAP>
                </ABOUT_HERO>

            </MAIN>
        )
    }
}
