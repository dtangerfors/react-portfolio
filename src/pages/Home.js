import React, { Component } from 'react'

import { MAIN } from '../components/sections'

import Hero from '../components/layout/Hero'
import Cases from '../components/layout/Cases'

export default class Home extends Component {
    render() {
        return (
            <MAIN>
                <Hero title="Frontend developer. Designer." />
                <Cases />
            </MAIN>
        )
    }
}
