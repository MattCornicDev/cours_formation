import React, { Component } from 'react'
import AffichageCours from '../components/affichageCours/AffichageCours';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />

                    <AffichageCours />

                </div>
                <Footer />
            </>
        )
    }
}
