import React, { Component } from 'react'
import AffichageCours from '../components/affichageCours/AffichageCours';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <div className="h-100 d-flex justify-content-evenly align-items-center">
                    <AffichageCours />
                </div>

                <div>
                    <Footer />
                </div>
            </>
        )
    }
}
