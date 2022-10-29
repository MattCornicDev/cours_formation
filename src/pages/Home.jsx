import React, { Component } from 'react'
import AffichageCours from '../components/affichageCours/AffichageCours';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';


export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <AffichageCours />
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Footer />
                </div>
            </>
        )
    }
}
