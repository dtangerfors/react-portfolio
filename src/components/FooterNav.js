import React, { Component } from 'react'

import Footer from './layout/Footer'
import MobileNav from './layout/MobileNav'

export default class FooterNav extends Component {
    render() {

        const isMobile = window.orientation > -1;

        if (!isMobile) {
            return (
                <Footer />
            )
        } else {
            return (
                <MobileNav />
            )
        }
    }
}