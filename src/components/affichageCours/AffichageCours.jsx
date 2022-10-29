import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './affichageCours.css';
import Tilt from 'react-vanilla-tilt';
import Card from 'react-bootstrap/Card';
import { Container, Col, Row} from 'react-bootstrap';


export default class AffichageCours extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row xs={1} md={4} className="g-4">
                        <Link to="/gitCours">
                            <Col>
                                <Tilt>
                                    <Card>
                                        <Card.Img variant="top" src="git.svg.png" alt="logo git" />
                                        <Card.Body>
                                            <Card.Title>GIT</Card.Title>
                                            <Card.Text>Aide mémoire des commandes git les plus utilisés ou les plus intéressantes.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tilt>
                            </Col>
                        </Link>

                        <Link to="/nodeCours">
                            <Col>
                                <Tilt>
                                    <Card>
                                        <Card.Img src="Node.js_logo.svg.png" alt="logo node JS" />
                                        <Card.Body>
                                            <Card.Title>NODE JS</Card.Title>
                                            <Card.Text>Environnement d'exécution nodeJS.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tilt>
                            </Col>
                        </Link>
                        <Col>
                            <Tilt>
                                <Card>
                                    <Card.Img src="html.svg.png" alt="logo html" />
                                    <Card.Body>
                                        <h5 className="card-title">HTML</h5>
                                        <p className="card-text">cours HTML.</p>
                                    </Card.Body>
                                </Card>
                            </Tilt>
                        </Col>
                        <Col>
                            <Tilt>
                                <Card>
                                    <Card.Img src="bootstrap_logo.svg.png" alt="logo bootstrap" />
                                    <Card.Body>
                                        <h5 className="card-title">BOOTSTRAP</h5>
                                        <p className="card-text">Cours bootstrap bientôt.</p>
                                    </Card.Body>
                                </Card>
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
