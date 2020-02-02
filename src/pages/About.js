import React, { Component } from 'react'
import styled from 'styled-components';
import device from '../assets/breakpoints'

import { MAIN } from '../components/sections';
import { H1, H2, P } from '../components/typography';

import Fact from '../components/Fact'

const ABOUT_HERO = styled.header`
    display: flex;
    flex-direction: row;
    margin: 10vh 0;
    position: relative;

    @media ${device.phone}{
        flex-direction: column;
        margin-top: 0;
    }
`;

const HERO_IMAGE_WRAP = styled.div`
    width: 40%;
    height: 80vh;
    position: sticky;
    top: 10vh;

    @media ${device.phone}{
        width: 100%;
        height: 40vh;
        position: relative;
        top: unset;
    }
`;

const HERO_IMAGE = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const HERO_TITLE_WRAP = styled.div`
    width: 60%;
    margin-top: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.phone} {
        width: 100%;
        margin-top: 10vh;
    }
`;

const LINE = styled.div`
    border-left: 1px solid ${props => props.theme.primaryColor};
    height: 30rem;
    margin: 3rem 0;
`;

const LINE_SM = styled(LINE)`
    height: 15rem;
`;

const ABOUT_TEXT = styled(P)`
    margin: 0 15rem;

    @media ${device.tabPort} {
        margin: 0 2rem;
    }
`;

const EDUCATION = styled(P)`
    margin: 0 15rem 1.5rem;

    @media ${device.tabPort} {
        margin: 0 2rem 1.5rem;
    }
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
                        <LINE />
                        <ABOUT_TEXT>Originally a photographer, turned graphic designer who now does frontend development. Born back in 1996, I’ve always loved expressing my creative sides. From having rather good success in creating objects for The Sims to doing photo shoots with friends in my teenage years, I have now settled in frontend development. </ABOUT_TEXT>
                        <LINE_SM />
                        <H2>Education</H2>
                        <EDUCATION>Dalarna University / Borlänge / 2015-2018 / Bachelor of Science in Graphic Arts</EDUCATION>
                        <EDUCATION>KYH / 2019-2021 / Stockholm / Frontend Development</EDUCATION>
                        <LINE_SM />
                        <H2>Experience</H2>
                        <EDUCATION>Webbess / Stockholm / 2020 – / Web designer</EDUCATION>
                        <EDUCATION>Ebbes / Fårö, Gotland / 2019 / Content creator </EDUCATION>
                        <EDUCATION>Dalarna University / Borlänge / 2018-2019 / Lecturer in Graphic Arts </EDUCATION>
                    </HERO_TITLE_WRAP>

                </ABOUT_HERO>
                <Fact />
            </MAIN>
        )
    }
}
