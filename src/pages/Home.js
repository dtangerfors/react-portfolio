import React, { Component } from 'react'

import { MAIN } from '../components/sections'

import Hero from '../components/layout/Hero'
import Cases from '../components/layout/Cases'

export default class Home extends Component {
    render() {
        return (
            <MAIN>
                <Hero title="Hi, I’m Daniel – a frontend developer who knows design." />
                <Cases />
            </MAIN>
        )
    }
}
