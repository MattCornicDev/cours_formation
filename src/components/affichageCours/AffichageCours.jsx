import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './affichageCours.css';
import 'bootstrap/dist/css/bootstrap.css';





export default class AffichageCours extends Component {
    render() {
        return (

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Git</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Cours git</h6>
                    <p class="card-text">Aide mémoire des commandes git les plus utilisés ou les plus intéressantes.</p>
                    <Link to="/gitCours">Click</Link>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            /*
        <Container>
            <Row xs={1} md={2} sm={1} lg={4} >
                <Link to="/gitCours">
                    <Col>
                        <Tilt>
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/git.svg.png"} alt="logo git" />
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
                                <Card.Img src={process.env.PUBLIC_URL + '/Node.js_logo.svg.png'} alt="logo node JS" />
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
                            <Card.Img src={process.env.PUBLIC_URL + "/html.svg.png"} alt="logo html" />
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
                            <Card.Img src={process.env.PUBLIC_URL + "/bootstrap_logo.svg.png"} alt="logo bootstrap" />
                            <Card.Body>
                                <h5 className="card-title">BOOTSTRAP</h5>
                                <p className="card-text">Cours bootstrap bientôt.</p>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Col>
                <Link to="/react_cours">
                    <Col>
                        <Tilt>
                            <Card>
                                <Card.Img src={process.env.PUBLIC_URL + "logo192.png"} alt="logo bootstrap" />
                                <Card.Body>
                                    <h5 className="card-title">ReactJS</h5>
                                    <p className="card-text">Cours React.</p>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Col>
                </Link>
            </Row>
        </Container>
*/

        )
    }
}
